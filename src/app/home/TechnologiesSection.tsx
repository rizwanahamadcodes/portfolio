import Section from '@/components/Section'
import React from 'react'
import logo from '/public/img/rizwan_logo__primary-to-primary-support-gradient.svg'
import Image from 'next/image'
import { DiJavascript1, DiSass, DiCss3 } from 'react-icons/di'
import { FaCss3 } from 'react-icons/fa6'

const TechnologiesSection = () => {
    return (
        <Section
            sectionClassName="bg-gray-200 dark:bg-gray-800"
            containerClassName=""
            title="Technologies I'm familiar with"
            subtitle="I have been programming for six years and these are the technologies i picked up along the way"
        >
            <div className="mb-8">
                <h5 className="mb-4 font-medium text-primary dark:text-primary">
                    Programming and Markup
                </h5>
                <div className="flex gap-4">
                    <div className="flex cursor-pointer items-center gap-3 rounded-full border-[2px] border-transparent bg-gray-100 p-2 pr-4 hover:border-gray-300/80 hover:shadow dark:bg-gray-700 dark:hover:border-gray-900/80">
                        <div className="rounded-full bg-white p-1 dark:bg-gray-600">
                            <DiJavascript1
                                size={30}
                                className="text-[#f7df1e]"
                            />
                        </div>
                        <p>Javascript</p>
                    </div>
                    <div className="flex cursor-pointer items-center gap-3 rounded-full border-[2px]  border-transparent bg-gray-100 p-2 pr-4 hover:border-gray-300/80 hover:shadow dark:bg-gray-700 dark:hover:border-gray-900/80">
                        <div className="rounded-full bg-white p-1 dark:bg-gray-600">
                            <DiSass size={30} className="text-[#c69]" />
                        </div>
                        <p>Sass</p>
                    </div>
                    <div className="flex cursor-pointer items-center gap-3 rounded-full border-[2px] border-transparent bg-gray-100 p-2 pr-4 hover:border-gray-300/80 hover:shadow dark:bg-gray-700 dark:hover:border-gray-900/80">
                        <div className="rounded-full bg-white p-1 dark:bg-gray-600">
                            <DiCss3 size={30} className="text-[#264de4]" />
                        </div>
                        <p>CSS</p>
                    </div>
                </div>
            </div>{' '}
            <div>
                <h5 className="mb-4 font-medium text-primary dark:text-primary">
                    Design
                </h5>
                <div className="flex gap-4">
                    <div className="flex cursor-pointer items-center gap-3 rounded-full border-[2px] border-transparent bg-gray-100 p-2 pr-4 hover:border-gray-300/80 hover:shadow dark:bg-gray-700 dark:hover:border-gray-900/80">
                        <div className="rounded-full bg-white p-1 dark:bg-gray-600">
                            <DiJavascript1
                                size={30}
                                className="text-[#f7df1e]"
                            />
                        </div>
                        <p>Javascript</p>
                    </div>
                    <div className="flex cursor-pointer items-center gap-3 rounded-full border-[2px]  border-transparent bg-gray-100 p-2 pr-4 hover:border-gray-300/80 hover:shadow dark:bg-gray-700 dark:hover:border-gray-900/80">
                        <div className="rounded-full bg-white p-1 dark:bg-gray-600">
                            <DiSass size={30} className="text-[#c69]" />
                        </div>
                        <p>Sass</p>
                    </div>
                    <div className="flex cursor-pointer items-center gap-3 rounded-full border-[2px] border-transparent bg-gray-100 p-2 pr-4 hover:border-gray-300/80 hover:shadow dark:bg-gray-700 dark:hover:border-gray-900/80">
                        <div className="rounded-full bg-white p-1 dark:bg-gray-600">
                            <DiCss3 size={30} className="text-[#264de4]" />
                        </div>
                        <p>CSS</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default TechnologiesSection
