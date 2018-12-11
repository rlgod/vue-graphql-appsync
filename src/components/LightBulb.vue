<template>
  <section class="container">
    <h1>AppSync Lightbulb</h1>
    <div>
      <div class="frame">
        <div class="lamp" v-bind:class="{ on: isOn }">
          <svg class="lamp__icon" viewBox="0 0 277 408">
            <path d="M191.32,378 L84.153,378 C79.097,378 75,382.121 75,387.169 C75,392.233 79.097,396.314 84.153,396.314 L106.328,396.314 C107.238,402.573 112.522,407.393 119.033,407.393 L157.457,407.393 C163.976,407.393 169.276,402.573 170.17,396.314 L191.321,396.314 C196.361,396.314 200.466,392.233 200.466,387.169 C200.465,382.121 196.36,378 191.32,378 Z"></path>
            <path d="M191.32,346 L84.153,346 C79.097,346 75,350.113 75,355.169 C75,360.233 79.097,364.314 84.153,364.314 L191.32,364.314 C196.36,364.314 200.465,360.233 200.465,355.169 C200.465,350.121 196.36,346 191.32,346 Z"></path>
            <path d="M241.923,228.803 L248.06,218.935 C254.555,208.888 276.136,172.74 276.136,138.088 C276.136,61.964 214.18,0 138.056,0 C61.924,0 0,61.964 0,138.088 C0,172.708 21.598,208.855 28.222,219.171 C28.051,218.935 38.009,234.729 38.009,234.729 C55.388,261.952 71.767,287.703 75.636,319.136 C76.465,325.85 82.147,330.89 88.894,330.89 L189.323,330.89 C196.045,330.89 201.752,325.85 202.589,319.169 C206.759,285.28 223.845,257.822 241.923,228.803 Z" class="lamp__light"></path>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'

const LIGHTBULB = gql`
  subscription lightbulbStatusChanged {
    lightbulbStatus {
      isOn
    }
  }
`

export default {
  name: 'LightBulb',
  apollo: {
    $subscribe: {
      lightbulbStatus: {
        query: LIGHTBULB,
        result(data) {
          debugger
          this.isOn = data.data.lightbulbStatus.isOn
        }
      }
    }
  },
  data: function() {
    return {
      isOn: false
    }
  }
}
</script>

<style lang="scss">

$yellow: #FFF35C;
$grey: #8C8F99;

body {
  background: #404556;
}

h1 {
  color: #fff;
}

.frame {
  width: 100%;
  color: #333;
}

.lamp {
	cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
	fill: #fff;
	&__icon {
		position: relative;
		z-index: 1;
		width: 110px;
		height: 150px;
		fill: inherit;
	}
	&__light {
		fill: $grey;
	}
	&:before,
	&:after {
		content: '';
		position: absolute;
		width: 100px;
		height: 100px;
		background: $yellow;
		border-radius: 100%;
		top: 0;
		left: 50%;
		transform: translate(-50%,0);
	}

  &.on {
		.lamp {
			&__light {
				fill: $yellow;
			}
		}

    &:before {
      box-shadow: 0 0 150px 10px $yellow;
    }
    &:after {
      box-shadow: 0 0 50px 10px $yellow;
    }
  }
}

</style>
