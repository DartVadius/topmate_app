<template>
    <div id="calculatorAdminio">
      <h3>Models
        <button class="m-1 p-1 btn btn-sm btn-primary" data-toggle="modal" data-target="#calculatorListingModal" @click="showModal('model')">
          <i class="fas fa-plus fa-lg"></i>
        </button>
      </h3>
      <div class="bg-white p-1">
        <div class="row border-bottom" v-for="(model, index) in models" :key="`model-${model.id}`">
          <div class="col-1">#{{model.id}}</div>
          <div class="col-9">
            {{model.name}}
            <div v-if="model.parts.length > 0">
              <div class="row border">
                <div class="col-4 border">Часть</div>
                <div class="col-3 border">Кв.футы</div>
                <div class="col-3 border">Кв.м</div>
                <div class="col-2 border"></div>
              </div>
              <div class="row border" v-for="(part, index) in model.parts" :key="`link-${model.id}-${part.id}-${index}`">
                <div class="col-4">
                  {{part.name}}
                </div>
                <div class="col-3 border">{{part.pivot.sqft}}</div>
                <div class="col-3 border">{{part.pivot.sqm}}</div>
                <div class="col-2 border">
                  <button class="m-1 p-1 btn btn-sm btn-danger float-right" @click="unlink(model.id, part.id)">
                    <i class="fas fa-unlink fa-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-2">
            <button class="py-1 px-2 btn btn-sm btn-primary" data-toggle="modal" data-target="#calculatorListingModal" @click="showEditModal('model', index)">
              <i class="fas fa-pen fa-lg"></i>
            </button>
            <button class="m-1 p-1 btn btn-sm btn-primary" data-toggle="modal" data-target="#linkListingModal" @click="showLinkModal(model)">
              <i class="fas fa-link fa-lg"></i>
            </button>
            <button class="ml-1 py-1 px-2 btn btn-sm btn-danger" @click="deleteItem('model', index)">
              <i class="fas fa-trash-alt fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
      <h3>Parts
        <button class="m-1 p-1 btn btn-sm btn-primary" data-toggle="modal" data-target="#calculatorListingModal" @click="showModal('part')">
          <i class="fas fa-plus fa-lg"></i>
        </button>
      </h3>
      <div class="bg-white">
        <div class="row" v-for="(part, index) in parts" :key="`part-${part.id}`">
          <div class="col-1">#{{part.id}}</div>
          <div class="col-9">{{part.name}}</div>
          <div class="col-2">
            <button class="py-1 px-2 btn btn-sm btn-primary" data-toggle="modal" data-target="#calculatorListingModal" @click="showEditModal('model', index)">
              <i class="fas fa-pen fa-lg"></i>
            </button>
            <button class="ml-1 py-1 px-2 btn btn-sm btn-danger" @click="deleteItem('model', index)">
              <i class="fas fa-trash-alt fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
      <div id="calculatorListingModal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"> {{ id ? 'Редактировать' : 'Добавить' }} {{ type === 'model' ? 'модель' : 'часть' }}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <el-form :key="'calculator'" labelPosition="top" label-width="100px">
                <el-form-item label="Название">
                  <el-input
                    name="name"
                    v-validate="'required'"
                    data-vv-scope="part"
                    v-model="name">
                  </el-input>
                  <span class="small text-danger">{{ errorBags.first('part.name') }}</span>
                </el-form-item>
              </el-form>
            </div>
            <div class="modal-footer">
              <button class="py-1 px-2 btn btn-sm btn-success" @click="save">
                <i class="fas fa-check fa-lg"></i>
              </button>
              <button class="py-1 px-2 btn btn-sm btn-danger" data-dismiss="modal">
                <i class="fas fa-times fa-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="linkListingModal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"> Добавить связь</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <el-form :key="'link'" labelPosition="top" label-width="100px" :model="link">
                Добавить к {{link.modelName}}
                <el-form-item label="Часть">
                  <el-select
                    name="part"
                    v-model="link.partId"
                    v-validate="'required'"
                    data-vv-scope="link"
                    placeholder="Select">
                    <template v-for="item in filteredParts">
                      <el-option
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                      </el-option>
                    </template>
                  </el-select>
                  <div class="small text-danger">{{ errorBags.first('link.part') }}</div>
                </el-form-item>
                <el-form-item label="Кв.метры">
                  <el-input
                    name="sqm"
                    v-validate="'required'"
                    data-vv-scope="link"
                    v-model="link.sqm">
                  </el-input>
                  <span class="small text-danger">{{ errorBags.first('link.sqm') }}</span>
                </el-form-item>
                <el-form-item label="Кв.футы">
                  <el-input
                    name="sqft"
                    v-validate="'required'"
                    data-vv-scope="link"
                    v-model="link.sqft">
                  </el-input>
                  <span class="small text-danger">{{ errorBags.first('link.sqft') }}</span>
                </el-form-item>
              </el-form>
            </div>
            <div class="modal-footer">
              <button class="py-1 px-2 btn btn-sm btn-success" @click="saveLink">
                <i class="fas fa-check fa-lg"></i>
              </button>
              <button class="py-1 px-2 btn btn-sm btn-danger" data-dismiss="modal">
                <i class="fas fa-times fa-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'CalculatorComponent',
  data () {
    return {
      models: [],
      parts: [],
      type: null,
      name: null,
      id: null,
      link: {
        modelName: null,
        modelId: null,
        partId: null,
        sqft: null,
        sqm: null
      },
      filteredParts: []
    }
  },
  created () {
    this.$store.dispatch('getParts').then((response) => {
      this.parts = response
    })
    this.$store.dispatch('getModels').then((response) => {
      this.models = response
    })
  },
  watch: {
    link: {
      handler () {
        this.updateFilteredParts()
        console.log(this.filteredParts)
      },
      deep: true
    }
  },
  methods: {
    updateFilteredParts () {
      const index = this.models.map(e => e.id).indexOf(this.link.modelId)
      if (index > -1) {
        this.filteredParts = this.parts.filter(item => {
          return this.models[index].parts.map(e => e.id).indexOf(item.id) < 0
        })
      }
    },
    purgeLink () {
      const modelId = this.link.modelId
      this.link = {
        modelName: null,
        modelId: modelId,
        partId: null,
        sqft: null,
        sqm: null
      }
    },
    unlink (modelId, partId) {
      this.$store.dispatch('detachPart', [modelId, partId]).then((response) => {
        const indexModel = this.models.map(e => e.id).indexOf(modelId)
        const indexPart = this.models[indexModel].parts.map(e => e.id).indexOf(partId)
        this.models[indexModel].parts.splice(indexPart, 1)
      })
    },
    showLinkModal (model) {
      this.errorBags.clear()
      this.purgeLink()
      this.link.modelId = model.id
      this.link.modelName = model.name
    },
    saveLink () {
      // console.log(this.errorBags)
      this.$validator.validateAll('link').then(value => {
        if (value) {
          this.$store.dispatch('attachPart', [this.link.modelId, this.link.partId, {
            sqft: this.link.sqft,
            sqm: this.link.sqm
          }]).then((response) => {
            console.log(response)
            const index = this.models.map(e => e.id).indexOf(this.link.modelId)
            this.models[index].parts.push(response)
            this.updateFilteredParts()
            this.purgeLink()
          })
        }
      })
    },
    showModal (type) {
      this.id = null
      this.type = type
      this.name = null
      this.errorBags.clear()
    },
    showEditModal (type, index) {
      this.type = type
      this.id = this.models[index].id
      this.name = this.models[index].name
      this.errorBags.clear()
    },
    save () {
      this.$validator.validateAll('part').then(value => {
        if (value) {
          // console.log(this.type, this.name)
          let data = {
            name: this.name
          }
          if (this.id) {
            if (this.type === 'model') {
              this.$store.dispatch('editModel', [this.id, data]).then((response) => {
                // this.models.push(response)
              })
            }
            if (this.type === 'part') {
              this.$store.dispatch('editPart', [this.id, data]).then((response) => {
                // this.parts.push(response)
              })
            }
          } else {
            if (this.type === 'model') {
              this.$store.dispatch('createModel', data).then((response) => {
                // this.models.push(response)
              })
            }
            if (this.type === 'part') {
              this.$store.dispatch('createPart', data).then((response) => {
                // this.parts.push(response)
              })
            }
          }
          this.errorBags.clear()
          this.id = null
          $('#calculatorListingModal').modal('hide')
        }
      })
    },
    deleteItem (type, index) {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        if (type === 'model') {
          this.id = this.models[index].id
          this.$store.dispatch('deleteModel', this.id).then(() => {
            this.models.splice(index, 1)
            this.id = null
            this.$message({
              type: 'success',
              message: 'Delete completed'
            })
          })
        }
        if (type === 'part') {
          this.id = this.parts[index].id
          this.$store.dispatch('deletePart', this.id).then(() => {
            this.parts.splice(index, 1)
            this.id = null
            this.$message({
              type: 'success',
              message: 'Delete completed'
            })
          })
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
