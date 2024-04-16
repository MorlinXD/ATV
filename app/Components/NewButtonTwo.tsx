import { type FC, type HTMLAttributeAnchorTarget } from 'react'
import Link from 'next/link'

interface Props {
  label: string
  link: string
  target?: HTMLAttributeAnchorTarget
  color: string
}

const NewButtonTwo: FC<Props> = ({ label, link, target, color }) => {
  return (
    <Link href={link} target={target}>
      <button
        className={`text-2xl text-white font-bold ${color} py-8 px-32 mt-4 bg-no-repeat  hover:opacity-80 transition-opacity duration-300 rounded-t-2xl rounded-bl-2xl`}
      >
          {label}
      </button>
    </Link>
  )
}

export default NewButtonTwo
