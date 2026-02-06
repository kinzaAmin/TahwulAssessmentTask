import { useState } from 'react'
import { Send } from 'lucide-react'

const Comments = ({ comments = [] }) => {
  const [newComment, setNewComment] = useState('')

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 1)
  }

  const handlePostComment = () => {
    if (newComment.trim()) {
      // Handle posting comment - you can add this functionality later
      console.log('Posting comment:', newComment)
      setNewComment('')
    }
  }

  return (
    <div>
      <h2 className="text-left mb-4 align-middle font-bold text-base leading-4 tracking-normal capitalize text-[#1D3557]">Comments</h2>
      
      {/* Existing Comments */}
      <div className="space-y-4 mb-6">
        {comments.map((comment, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 relative">
            <div className="flex gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-[#E0E8ED]">
                <span className="font-medium text-[#1D3557] text-sm">
                  {getInitials(comment.name)}
                </span>
              </div>
              
              {/* Comment Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="align-middle font-bold text-sm leading-4 tracking-normal capitalize text-[#1D3557]">
                    {comment.name}
                  </h3>
                  <span className="align-middle font-normal text-sm leading-4 tracking-normal capitalize text-[#8597A8]">
                    {comment.date}
                  </span>
                </div>
                <p className="align-middle font-normal text-sm leading-5 tracking-normal capitalize text-[#1D3557]">
                  {comment.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* New Comment Input */}
      <div className="space-y-3">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg resize-y min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
        />
        <button
          onClick={handlePostComment}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium bg-[#1D3557]"
        >
          <Send className="w-4 h-4" />
          <span>Post Comment</span>
        </button>
      </div>
    </div>
  )
}

export default Comments

