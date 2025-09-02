'use client'

import CountUp from "react-countup"

const stats = [
  { num: 2, suffix: "+", text: "Years of Experience" },
  { num: 12, suffix: "+", text: "Projects Completed" },
  { num: 5, suffix: "", text: "Technologies Mastered" },
  { num: 300, suffix: "+", text: "Code Commits" },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => {
            const [firstLine, ...rest] = item.text.split(" ");
            const secondLine = rest.join(" ");
            return (
              <div key={index} className="flex items-center gap-4 xl:gap-6">
                {/* Counter */}
                <div className="text-4xl xl:text-6xl font-extrabold">
                  <CountUp
                    start={1}
                    end={item.num}
                    duration={4}
                    suffix={item.suffix}
                  />
                </div>
                {/* Text */}
                <div className="text-lg xl:text-xl font-medium leading-snug">
                  <div>{firstLine}</div>
                  {secondLine && <div>{secondLine}</div>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
