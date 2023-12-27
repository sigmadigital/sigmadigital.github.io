

export function Section({ title, id, children }: { title: string, id?: string, children?: React.ReactNode }) {
  return (
    <section className="w-full flex flex-col justify-start items-center z-0 p-4 pb-12" id={id}>
      <div className="container max-w-4xl flex flex-col justify-start items-stretch">
        <div className="flex justify-start items-stretch pb-4">
          <div className="font-bold text-gray-700 dark:text-green-500 tracking-tighter text-4xl">
            {title}
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}