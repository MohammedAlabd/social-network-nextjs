const TextBody = ({ text }: { text?: string }) => {
	const isArabic = text && /[^\u0000-\u007F]/.test(text);
	const direction = isArabic ? "rtl" : "ltr";
	return (
		<div className="m-2" style={{ direction }}>
			{text}
		</div>
	);
};

export default TextBody;
