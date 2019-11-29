<template>
    <div id="adminio_faq">
      <h3>FAQ
        <button class="p-1 btn btn-sm btn-primary" data-toggle="modal" data-target="#faqCreateModal">
          <i class="fas fa-plus fa-lg"></i>
        </button>
      </h3>
      <div class="card">
        <div class="card-body">
          <div class="row my-1 border-bottom" v-for="(item, key) in faqList" v-bind:key="item.id">
            <template v-if="locale === 'en'">
              <div class="col-1"># {{item.id}}</div>
              <div class="col-3">{{item.question_en}}</div>
              <div class="col-6">{{item.answer_en}}</div>
              <div class="col-2">
                <button class="py-1 px-2 btn btn-sm btn-primary" data-toggle="modal" data-target="#faqEditModal" @click="setEditFaq(key)">
                  <i class="fas fa-pen fa-lg"></i>
                </button>
                <button class="ml-1 py-1 px-2 btn btn-sm btn-danger" @click="deleteFaq(key)">
                  <i class="fas fa-trash-alt fa-lg"></i>
                </button>
              </div>
            </template>
          </div>
        </div>
      </div>
      <!-- Faq modals -->
      <div id="faqCreateModal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Новый вопрос/ответ</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <el-form :label-position="labelPosition" label-width="100px" :model="newFaq" :key="'newFaq'">
                <el-form-item label="Вопрос">
                  <el-input
                    name="question"
                    v-model="newFaq.question">
                  </el-input>
                  <span class="small text-danger">{{ errorBags.first('create.question') }}</span>
                </el-form-item>
                <el-form-item label="Ответ">
                  <el-input
                    :key="'newFaq.answer'"
                    type="textarea"
                    :rows="3"
                    v-model="newFaq.answer">
                  </el-input>
                  <span class="small text-danger">{{ errorBags.first('create.answer') }}</span>
                </el-form-item>
                <el-form-item label="Локаль">
                  <el-select v-model="newFaq.locale" placeholder="Select">
                    <el-option
                      v-for="item in locales"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
            <div class="modal-footer">
              <button class="py-1 px-2 btn btn-sm btn-success" @click="saveFaq">
                <i class="fas fa-check fa-lg"></i>
              </button>
              <button class="py-1 px-2 btn btn-sm btn-danger" data-dismiss="modal">
                <i class="fas fa-times fa-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="faqEditModal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Редактировать</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <el-form v-if="editModel" :key="'editFaq'" :label-position="labelPosition" label-width="100px">
                <el-form-item label="Вопрос">
                  <el-input
                    name="question"
                    v-model="editModel.question">
                  </el-input>
                  <span class="small text-danger">{{ errorBags.first('edit.question') }}</span>
                </el-form-item>
                <el-form-item label="Ответ">
                  <el-input
                    name="answer"
                    type="textarea"
                    :rows="3"
                    v-model="editModel.answer">
                  </el-input>
                  <span class="small text-danger">{{ errorBags.first('edit.answer') }}</span>
                </el-form-item>
                <el-form-item label="Локаль">
                  <el-select v-model="editModel.locale" placeholder="Select">
                    <el-option
                      v-for="item in locales"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
            <div class="modal-footer">
              <button class="py-1 px-2 btn btn-sm btn-success" @click="editFaq">
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
  name: 'FaqComponent',
  data () {
    return {
      faqList: [],
      locale: 'en',
      locales: [
        {
          value: 'en',
          label: 'en'
        }
      ],
      labelPosition: 'left',
      newFaq: {
        question: null,
        answer: null,
        locale: 'en'
      },
      editKey: null,
      editModel: null
    }
  },
  created () {
    this.$store.dispatch('getFaq').then((response) => {
      this.faqList = response
    })
  },
  methods: {
    saveFaq () {
      this.$store.dispatch('createFaq', this.newFaq).then((response) => {
        this.faqList = this.$store.state.app.faq
      })
    },
    editFaq () {
      this.$store.dispatch('editFaq', {
        id: this.faqList[this.editKey].id,
        data: this.editModel
      }).then((response) => {
        this.faqList[this.editKey] = response
        this.editModel = null
        $('#faqEditModal').modal('hide')
      })
    },
    deleteFaq (key) {
      this.$store.dispatch('deleteFaq', this.faqList[key].id).then(() => {
        this.faqList.splice(key, 1)
      })
    },
    setEditFaq (key) {
      console.log(key)
      this.editKey = key
      if (this.locale === 'en') {
        this.editModel = {
          question: this.faqList[key].question_en,
          answer: this.faqList[key].answer_en,
          locale: this.locale
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
