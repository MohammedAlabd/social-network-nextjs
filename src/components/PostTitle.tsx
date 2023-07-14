
const PostTitle = ({ text }: { text?: string }) => {
  const isArabic = text && /[^\u0000-\u007F]/.test(text);
	const direction = isArabic ? "rtl" : "ltr";
  return (
    <div style={{ direction }}>
        <h1 className="text-5xl font-bold mt-10 mb-10">{text}</h1>
    </div>
  )
}

export default PostTitle