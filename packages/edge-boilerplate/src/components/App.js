import React from 'react'
import universal from 'react-universal-component'
import styles from './App.css'

import "normalize.css/normalize.css"

const UniversalExample = universal(() => import('./Example'), {
  resolve: () => require.resolveWeak('./Example'),
  minDelay: 500
})

const LazyHome = universal(() => import('../views/Home/Home'), {
  resolve: () => require.resolveWeak('../views/Home/Home'),
  minDelay: 500
})

const LazyMissing = universal(() => import('../views/Missing/Missing'), {
  resolve: () => require.resolveWeak('../views/Missing/Missing'),
  minDelay: 500
})


export default class App extends React.Component {
  // set `show` to `true` to see dynamic chunks served by initial request
  // set `show` to `false` to test how asynchronously loaded chunks behave,
  // specifically how css injection is embedded in chunks + corresponding HMR
  state = {
    show: false
  }

  componentDidMount() {
    if (this.state.show) return

    setTimeout(() => {
      console.log('now showing <Example />')
      this.setState({ show: true })
    }, 1500)
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>Hello World</h1>

        {this.state.show && <UniversalExample />}
        {!this.state.show && 'Async Component Not Requested Yet'}

        <LazyHome/>
        <LazyMissing/>
      </div>
    )
  }
}