import arrayEqual from './array/arrayEqual'

function hello() {
  console.log('hello')
}

export default {
  hello,
  arrayEqual,
} as const
