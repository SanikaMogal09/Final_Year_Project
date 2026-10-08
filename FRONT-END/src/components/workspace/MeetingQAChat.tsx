import { LoaderCircle, Send, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { Meeting, MeetingWorkspaceData, QAChatMessage } from '../../types'
import { answerMeetingQuestion } from '../../utils/mockMeetingQA'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

const suggestedQuestions = [
  'What were the key decisions?',
  'What action items were assigned to me?',
  'Which questions remain unresolved?',
  'Summarize the main risks.',
  'What did each participant contribute?',
]

interface MeetingQAChatProps {
  meeting: Meeting
  messages: QAChatMessage[]
  onMessagesChange: (messages: QAChatMessage[]) => void
  workspace: MeetingWorkspaceData
}

export function MeetingQAChat({ meeting, messages, onMessagesChange, workspace }: MeetingQAChatProps) {
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [messages, isThinking])

  const send = (question: string) => {
    const trimmed = question.trim()
    if (!trimmed || isThinking) return

    const userMessage: QAChatMessage = { id: `user-${crypto.randomUUID()}`, role: 'user', text: trimmed }
    onMessagesChange([...messages, userMessage])
    setInput('')
    setIsThinking(true)

    window.setTimeout(() => {
      const answer = answerMeetingQuestion(trimmed, meeting, workspace)
      onMessagesChange([...messages, userMessage, { id: `assistant-${crypto.randomUUID()}`, role: 'assistant', text: answer }])
      setIsThinking(false)
    }, 450)
  }

  return (
    <Card className="flex min-h-80 flex-col p-5">
      <div className="flex items-start gap-3">
        <span className="grid size-9 place-items-center rounded-md bg-violet/10 text-ai"><Sparkles size={18} /></span>
        <div>
          <h3 className="text-base font-semibold text-foreground">Ask AI about this meeting</h3>
          <p className="mt-1 text-sm text-secondary">Ask questions and find answers from the meeting&apos;s available information.</p>
          <p className="mt-1 text-xs text-muted">Frontend demonstration using mock meeting data — not a live AI service.</p>
        </div>
      </div>

      <div aria-live="polite" className="mt-4 flex-1 space-y-3 overflow-y-auto rounded-md border border-border bg-subtle/50 p-3">
        {messages.length === 0 && !isThinking ? (
          <p className="px-1 py-8 text-center text-sm text-muted">Ask a question to explore decisions, action items, risks, and more.</p>
        ) : (
          messages.map((message) => (
            <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`} key={message.id}>
              <div className={`max-w-[90%] rounded-md px-3 py-2 text-sm leading-6 whitespace-pre-wrap ${message.role === 'user' ? 'bg-accent text-white' : 'border border-border bg-card text-foreground'}`}>
                {message.role === 'assistant' && <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-ai">Assistant · sample answer</p>}
                {message.text}
              </div>
            </div>
          ))
        )}
        {isThinking && (
          <div className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-secondary">
            <LoaderCircle className="animate-spin text-ai" size={15} />
            Generating sample answer…
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {suggestedQuestions.map((question) => (
          <button
            className="rounded-md border border-border bg-card px-2.5 py-1.5 text-left text-xs text-secondary hover:border-accent/40 hover:text-accent disabled:opacity-50"
            disabled={isThinking}
            key={question}
            onClick={() => send(question)}
            type="button"
          >
            {question}
          </button>
        ))}
      </div>

      <form
        className="mt-3 flex gap-2"
        onSubmit={(event) => {
          event.preventDefault()
          send(input)
        }}
      >
        <label className="sr-only" htmlFor={`ask-ai-${meeting.id}`}>Ask a question about this meeting</label>
        <input
          className="h-10 min-w-0 flex-1 rounded-md border border-border bg-card px-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent"
          disabled={isThinking}
          id={`ask-ai-${meeting.id}`}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault()
              send(input)
            }
          }}
          placeholder="Ask about decisions, action items, risks…"
          value={input}
        />
        <Button aria-label="Send question" disabled={isThinking || !input.trim()} type="submit">
          <Send size={16} />
          Send
        </Button>
      </form>
    </Card>
  )
}
