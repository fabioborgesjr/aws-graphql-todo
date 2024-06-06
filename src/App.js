import React, { useState } from "react"
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'

import awsExports from "./aws-exports"

Amplify.configure(awsExports)

const App = () => {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <section>
      <h1 style={{ textAlign: "center"}}>
        AWS GRAPHQL Todo React App
      </h1>
      <Authenticator>
        {({ user, signOut, ...params }) => {

          console.log({ user, params, signOut })

          return (
            <main>
              <h1>Welcome {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          )
        }}
      </Authenticator>
    </section>
  )
}

export default App