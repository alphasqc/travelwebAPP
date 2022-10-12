<template>
    <div class="plan">
      <div v-for="item in planlist" :key="item.id" class="planbox">
        <van-swipe-cell>
          <van-row>
            <van-col span="11">
              {{item.starplace}}
            </van-col>
            <van-col  span="2">
              ~
            </van-col>
            <van-col span="11">
              {{item.endplace}}
            </van-col>
          </van-row>

          <van-row>
            <van-col span="11">
              {{item.startime}}
            </van-col>
            <van-col  span="2">
              ~
            </van-col>
            <van-col span="11">
              {{item.endtime}}
            </van-col>
          </van-row>
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="deletePlan(item.id)" />
          </template>
        </van-swipe-cell>
      </div>

      <div class="addbox">
        <van-field
          v-model="addlist.starplace"
          name="起始地"
          label="起始地"
          placeholder="起始地"
          :rules="[{ required: true, message: '请填写起始地' }]"
        />
        <van-field
          v-model="addlist.endplace"
          name="目的地"
          label="目的地"
          placeholder="目的地"
          :rules="[{ required: true, message: '请填写目的地 ' }]"
        />

        <van-cell title="选择日期" :value="date" @click="show = true" />
        <van-calendar v-model:show="show" type="range" @confirm="onConfirm" />

        <van-button type="primary" style="width: 80%;height: 2rem;" @click="addPlan">
          添加
        </van-button>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { getHome } from '@/axios/api'
import axios from 'axios'

export default {
  setup () {
    // 增加数据
    const addlist = ref({
      starplace: '',
      endplace: '',
      startime: '',
      endtime: ''
    })

    const date = ref('')
    const show = ref(false)

    const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`
    const onConfirm = (values) => {
      const [start, end] = values
      show.value = false
      date.value = `${formatDate(start)} - ${formatDate(end)}`
      addlist.value.startime = formatDate(start)
      addlist.value.endtime = formatDate(end)
    }

    const addPlan = () => {
      getHome('planlist').thne((res) => {
        res.data.forEach(item => {
          axios.request({
            method: 'post',
            url: 'http://localhost:3000/planlist/',
            data: addlist.value
          })
        })
      })
      console.log(addlist)
    }
    // 接收数据
    const planlist = ref([])
    getHome('planlist').then((res) => {
      planlist.value = res.data
    })
    // 删除数据
    const deletePlan = (foundid) => {
      getHome('planlist').then((res) => {
        res.data.forEach(item => {
          axios.request({
            method: 'delete',
            url: 'http://localhost:3000/planlist/' + foundid
          })
        })
      })
    }
    return {
      date,
      show,
      onConfirm,
      planlist,
      addlist,
      addPlan,
      deletePlan
    }
  }
}
</script>

<style>
.plan .addbox{
  min-height: 5rem;
  background-color: white;
  position: relative;
  bottom: -13rem;
}
.plan .goods-card {
    margin: 0;
    background-color: white;
}

.pan .delete-button {
    height: 100%;
}

.plan {
    margin-top: 2.5rem;
    background-color: rgb(235, 235, 235);
    min-height: 27rem;
}
.planbox{
  background-color: white;
  padding: 5px;
  border-radius: 1rem;
  margin: 5px 0 5px 0;
}
</style>
