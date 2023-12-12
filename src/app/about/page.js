async function takeTime(){
  await new Promise((resolve)=>{
    setTimeout(resolve,2000)
  })
}


export default async function About() {
  await takeTime()
  return (
    <div>this is an aboutpage</div>
  )
}
