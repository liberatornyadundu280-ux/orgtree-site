function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#C8A95B]">{title}</h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto theme-text-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
