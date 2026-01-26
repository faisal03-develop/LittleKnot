import {Geologica} from "next/font/google";

const geologicaFont = Geologica({
    variable: "--font-geologica",
    subsets: ["latin"],
    weight: ["400", "700", "900"],
})

export default function page() {
  return (
    <div className={`${geologicaFont.variable}}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, tenetur voluptates deleniti ratione aliquid ducimus vitae rem laboriosam distinctio consectetur! Similique tempore inventore ipsa at nemo esse architecto perferendis quas!</div>
  )
}
