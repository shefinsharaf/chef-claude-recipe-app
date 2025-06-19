
const Demo = () => {
  function Signup (FormData){
    const email = FormData.get("email")
    console.log(email)
    formel.reset()

  }
  return (
    <section>
      <h1>From submission</h1>
      <form action={Signup} >
        <label htmlFor="email">Email : </label>
        <input id="email" type="email" name ="email" placeholder="shefin@gmail.com" />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" />
        <button>Submit</button>
      </form>
    </section>
  )
}

export default Demo
