import clsx from 'clsx';

type ErrorMessageProps = {
  pageTitle: string;
  contentTitle: string;
  content: string | React.ReactNode;
};

export default function ErrorMessage({
  pageTitle,
  contentTitle,
  content,
}: ErrorMessageProps) {
  return (
    <>
      <title>{pageTitle}</title>
      <div
        className={clsx(
          'min-h-[320px] bg-slate-900 text-slate-100',
          'mb-16 p-8 rouded-xl',
          'flex items-center justify-center',
          'text-center',
        )}
      >
        <div>
          <h1 className='text-7xl/tight mb-4 font-extrabold'>{contentTitle}</h1>
          <div className='text-xl'>{content}</div>
        </div>
      </div>
    </>
  );
}
