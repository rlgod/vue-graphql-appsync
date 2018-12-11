<template>
  <div>
    <button @click="switchOn()">Switch on</button>
    <button @click="switchOff()">Switch off</button>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Controls',
  methods: {
    switchOn() {
      this.$apollo.mutate({
        mutation: gql`
          mutation switchOn {
            switchOn {
              isOn
            }
          }
        `
      })
    },
    switchOff() {
      this.$apollo.mutate({
        mutation: gql`
          mutation switchOff {
            switchOff {
              isOn
            }
          }
        `
      })
    }
  }
}
</script>
