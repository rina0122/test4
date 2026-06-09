import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, MessageSquare, Check, AlertCircle, Trash2, Calendar } from 'lucide-react';

interface GuestbookMessage {
  id: string;
  name: string;
  contact: string;
  content: string;
  date: string;
}

export default function ContactSection() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Guestbook Messages from LocalStorage
  const [guestbookList, setGuestbookList] = useState<GuestbookMessage[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('intro_guestbook_msg');
    if (saved) {
      setGuestbookList(JSON.parse(saved));
    } else {
      const initialMsgs: GuestbookMessage[] = [
        {
          id: 'def-1',
          name: '김태우 본부장',
          contact: 'tw.kim@nextcode.co.kr',
          content: '도윤님 포트폴리오 사이트가 대단히 인상적이네요! 기회가 된다면 커피 한 잔 하면서 협업 이야기를 나누고 싶습니다.',
          date: '2026.06.08'
        }
      ];
      setGuestbookList(initialMsgs);
      localStorage.setItem('intro_guestbook_msg', JSON.stringify(initialMsgs));
    }
  }, []);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('제안자 성함 혹은 사명을 기재해 주십시오.');
      return;
    }
    if (!message.trim()) {
      setErrorMsg('전달하실 의견 본문을 기재해 주십시오.');
      return;
    }

    setIsSending(true);

    setTimeout(() => {
      const newMsg: GuestbookMessage = {
        id: `msg-${Date.now()}`,
        name: name.trim(),
        contact: contact.trim() || '비공개',
        content: message.trim(),
        date: new Date().toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        }).replace(/\s/g, '').slice(0, -1)
      };

      const updated = [newMsg, ...guestbookList];
      setGuestbookList(updated);
      localStorage.setItem('intro_guestbook_msg', JSON.stringify(updated));

      setIsSending(false);
      setIsSuccess(true);
      
      setName('');
      setContact('');
      setMessage('');

      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);

    }, 1200);
  };

  const deleteMessage = (id: string) => {
    const updated = guestbookList.filter(item => item.id !== id);
    setGuestbookList(updated);
    localStorage.setItem('intro_guestbook_msg', JSON.stringify(updated));
  };

  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Contact Form Card */}
      <div className="lg:col-span-12 xl:col-span-6 bg-[#FAF8F5] rounded-none border border-[#1A1A1A]/10 p-6 md:p-8 flex flex-col justify-between space-y-6 relative border-l-4 border-l-[#C53030]">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-[#C53030]/10 rounded-none border border-[#C53030]/20">
              <Mail className="w-5 h-5 text-[#C53030]" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-black text-[#1A1A1A] tracking-tight">CORRESPONDENCE BOX</h2>
              <p className="text-[10px] font-mono uppercase tracking-[0.1em] text-gray-400">04. Submit inquiry logs for partnerships and general consults.</p>
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="space-y-4 pt-1 text-left">
            {/* Input Name */}
            <div className="space-y-1">
              <label htmlFor="input-name" className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-[0.2em] block">
                SENDER NAME *
              </label>
              <input
                id="input-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="성함 혹은 기업명을 입력해 주십시오"
                className="w-full text-xs md:text-sm px-3.5 py-2.5 rounded-none border border-[#1A1A1A]/15 focus:outline-hidden focus:border-[#C53030] bg-white font-serif"
              />
            </div>

            {/* Input Contact */}
            <div className="space-y-1">
              <label htmlFor="input-contact" className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-[0.2em] block">
                CONTACT METRIC (EMAIL/PHONE)
              </label>
              <input
                id="input-contact"
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="연락 받으실 이메일 주소를 입력해 주십시오"
                className="w-full text-xs md:text-sm px-3.5 py-2.5 rounded-none border border-[#1A1A1A]/15 focus:outline-hidden focus:border-[#C53030] bg-white font-serif"
              />
            </div>

            {/* Input Message */}
            <div className="space-y-1">
              <label htmlFor="input-message" className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-[0.2em] block">
                MEMORANDUM CONTENTS *
              </label>
              <textarea
                id="input-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                maxLength={400}
                placeholder="프로젝트 의뢰, 이력 공유, 커피챗 연락 등 편안한 소통을 기다리고 있습니다."
                className="w-full text-xs md:text-sm px-3.5 py-2.5 rounded-none border border-[#1A1A1A]/15 focus:outline-hidden focus:border-[#C53030] bg-white resize-none font-serif"
              />
              <div className="text-right text-[9px] text-gray-400 font-mono tracking-wider">
                {message.length} / 400 CHARACTERS
              </div>
            </div>

            {/* Banners (Success/Error) */}
            <AnimatePresence mode="wait">
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 p-3 rounded-none bg-red-50 border-l border-red-500 text-xs text-red-800 font-serif"
                >
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{errorMsg}</span>
                </motion.div>
              )}

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 p-3 rounded-none bg-emerald-50 border-l border-emerald-500 text-xs text-emerald-800 font-serif"
                >
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>메시지가 방명록 아카이브 상단에 등재 완료되었습니다.</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className={`w-full text-xs py-3.5 rounded-none font-mono font-bold tracking-[0.2em] flex items-center justify-center gap-2 text-white shadow-3xs cursor-pointer transition-all uppercase ${
                isSending
                  ? 'bg-gray-400 border-gray-500 cursor-not-allowed'
                  : 'bg-[#C53030] hover:bg-black border border-[#C53030]'
              }`}
            >
              {isSending ? (
                <>
                  <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span>MEMORANDUM OF TRANSMITTING...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT INTERACTIVE DISPATCH</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Guestbook Timeline Card */}
      <div className="lg:col-span-12 xl:col-span-6 bg-[#F5F2EE]/60 border border-[#1A1A1A]/10 rounded-none p-6 md:p-8 flex flex-col justify-between">
        <div className="space-y-4 w-full">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white rounded-none border border-[#1A1A1A]/10">
                <MessageSquare className="w-5 h-5 text-[#C53030]" />
              </div>
              <div>
                <h2 className="text-xl font-serif font-black text-[#1A1A1A] tracking-tight">CORRESPONDENCE ARCHIVE</h2>
                <p className="text-[10px] font-mono uppercase tracking-[0.1em] text-gray-400">05. Historic ledger logs generated from local visitor entries.</p>
              </div>
            </div>
            
            <span className="text-[9px] font-mono font-bold tracking-[0.1em] px-2.5 py-0.5 rounded-none bg-white text-[#1A1A1A] border border-[#1A1A1A]/15 shrink-0">
              {guestbookList.length} LOGGED ITEMS
            </span>
          </div>

          {/* List display */}
          <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
            <AnimatePresence initial={false}>
              {guestbookList.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center text-xs text-gray-450 border border-dashed border-[#1A1A1A]/15 rounded-none bg-white font-serif italic"
                >
                  사적인 아카이브 대장이 비어있습니다. 방명록을 등재해 보십시오.
                </motion.div>
              ) : (
                guestbookList.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-white rounded-none border border-[#1A1A1A]/10 flex flex-col justify-between relative group"
                  >
                    <div className="space-y-2">
                      {/* Name Card and Delete trigger */}
                      <div className="flex items-start justify-between">
                        <div className="space-y-0.5">
                          <h4 className="text-xs font-serif font-bold text-[#1A1A1A]">{item.name}</h4>
                          <span className="text-[9px] font-mono text-gray-400 block max-w-[150px] truncate" title={item.contact}>
                            {item.contact}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono font-bold text-gray-500 bg-[#F5F2EE] border border-[#1A1A1A]/10 px-1.5 py-0.5 rounded-none flex items-center gap-1">
                            <Calendar className="w-2.5 h-2.5 text-[#C53030]" />
                            {item.date}
                          </span>
                          
                          <button
                            onClick={() => deleteMessage(item.id)}
                            className="text-gray-400 hover:text-[#C53030] opacity-0 group-hover:opacity-100 transition-opacity p-0.5 hover:bg-slate-100 rounded-none cursor-pointer"
                            title="DELETE"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-gray-700 leading-relaxed font-serif italic">
                        "{item.content}"
                      </p>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Informative Footer */}
        <div className="text-[9px] text-gray-400 font-mono mt-6 border-t border-[#1A1A1A]/10 pt-3 flex items-center justify-between uppercase">
          <span>Persists strictly in sandbox cache</span>
          <span>End of ledger</span>
        </div>
      </div>
    </section>
  );
}
