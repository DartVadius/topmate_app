<template>
  <!--==========================
        Subscribe Section
      ============================-->
  <section id="calculator">
    <div class="container wow fadeInUp">
      <div class="section-header">
        <h2>Calculation of proper material quantity per car</h2>
        <p>For your convenience we have created a calculator allowing to find out the required material quantity based on body elements of card of various classes.</p>
      </div>
      <div class="form-row justify-content-center">
        <div class="col-auto my-1">
          <el-select
            v-model="selectedModelId"
            @change="modelChange"
            @clear="modelClear"
            clearable
            placeholder="Model of a car">
            <el-option
              v-for="item in models"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </div>
        <div class="col-auto my-1">
          <el-select
            v-model="selectedParts"
            @change="partChange"
            @clear="partChange"
            multiple
            collapse-tags
            placeholder="Body elements of car">
            <template v-if="selectedModel">
              <el-option
                v-for="item in selectedModel.parts"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </template>
          </el-select>
        </div>
        <div class="col-auto my-1">
          <el-input
            disabled
            class="input-value-center"
            placeholder="Result"
            v-model="showTotal">
          </el-input>
        </div>
      </div>
      <div class="section-header mt-4 mb-0">
        <p>Disclaimer: Sure, body dimensions of some automobiles differ from the average, and we recommend you order by 15-20% more than estimated if you consider your car one of the largest in the class. We hope that this calculation methodology will help you.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CalculatorComponent',
  data () {
    return {
      models: [],
      selectedModelId: null,
      selectedModel: null,
      selectedParts: [],
      total: {
        sqft: 0,
        sqm: 0
      },
      showTotal: ''
    }
  },
  created () {
    this.$store.dispatch('getModels').then((response) => {
      this.models = response
    })
  },
  methods: {
    modelChange () {
      this.purge()
      const index = this.models.map(e => e.id).indexOf(this.selectedModelId)
      if (index >= 0) {
        this.selectedModel = this.models[index]
      }
      this.selectedParts = []
    },
    modelClear () {
      this.purge()
      this.selectedModel = null
      this.selectedParts = []
    },
    partChange () {
      this.purge()
      const selected = this.selectedModel.parts.filter(item => {
        return this.selectedParts.includes(item.id)
      })
      selected.forEach(item => {
        this.total.sqft += item.pivot.sqft
        this.total.sqm += item.pivot.sqm
      })
      this.showTotal = `${this.total.sqft} sqft / ${this.total.sqm} sqm`
      console.log(this.selectedParts, selected)
    },
    purge () {
      this.showTotal = ''
      this.total = {
        sqft: 0,
        sqm: 0
      }
    }
  }
}
</script>

<style>
div.input-value-center > input {
  text-align: center !important;
}
</style>
