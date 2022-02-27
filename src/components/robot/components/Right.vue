<template>
  <div class="rightContainer">
    <img src="../../../assets/dataShowImg/bj-1.png" alt="" class="bj-1" />
    <img src="../../../assets/dataShowImg/bj-2.png" alt="" class="bj-2" />
    <img src="../../../assets/dataShowImg/bj-3.png" alt="" class="bj-3" />
    <img src="../../../assets/dataShowImg/bj-4.png" alt="" class="bj-4" />
    <div class="displayArea" id="autoScrolledDiv">
      <msg v-for="msg in msgList" :key="msg.id" v-bind:MsgContent="msg"></msg>
    </div>
    <div class="inputArea">
      <input type="text" v-model="inputMsg" v-on:keydown.enter="send(inputMsg)" />
      <span v-on:click="send(inputMsg)">发送</span>
    </div>
  </div>
</template>

<script>
import Msg from './Msg'

const KEY = 'bd0481fbe8104828af364ad26e67c9de'
const URL = 'http://www.tuling123.com/openapi/api'

export default {
  name: 'right',
  components: {
    Msg
  },
  data: function () {
    return {
      inputMsg: '',
      msgList: [
        {
          id: 0,
          status: 0,
          who: 'robot',
          msg: {
            code: 100000,
            text: '您好，我是智能问答机器人TESLA。'
          }
        }
      ]
    }
  },
  watch: {
    msgList: function () {
      // scroll to bottom
      this.$nextTick(() => {
        let list = document.getElementById('autoScrolledDiv')
        list.scrollTop = list.scrollHeight
      })
    }
  },
  methods: {
    send: function (msg) {
      let trimedStr = this.inputMsg.replace(/(^\s*)|(\s*$)/g, '')
      if (trimedStr.length === 0) {
        return
      }
      let msgId = this.msgList.length + 1
      // add message of me
      let m = {
        id: msgId,
        status: 1,
        who: 'me',
        msg: {
          code: 100000,
          text: trimedStr
        }
      }
      this.msgList.push(m)
      this.inputMsg = ''
      // send request
      this.$http.post(
        URL,
        {
          key: KEY,
          info: trimedStr
        }
      ).then(
        // success
        (resp) => {
          // update message of me
          let msgToUpdate = this.getMsgById(msgId)
          msgToUpdate.status = 0
          // get json
          return resp.json()
        },
        // error
        (resp) => {
          let msgToUpdate = this.getMsgById(msgId)
          msgToUpdate.status = 2
        }
      ).then((msg) => {
        if (!msg) {
          return
        }
        let msgId = this.msgList.length + 1
        // add message of robot
        let m = {
          id: msgId,
          status: 0,
          who: 'robot',
          msg: msg
        }
        this.msgList.push(m)
      })
    },
    getMsgById: function (id) {
      for (let i = 0; i < this.msgList.length; ++i) {
        if (id === this.msgList[i].id) {
          return this.msgList[i]
        }
      }
    }
  }
}
</script>

<style scoped>
.rightContainer {
  float: left;
  margin-left: 15px;
  width: 465px;
  height: 480px;
  /* border: #dbdada solid 1px; */
  border: 1px solid #20558b;
  /* box-shadow: 0 0 5px 0 #dbdada; */
  /* background: #fff; */
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  
}

.displayArea {
  margin-top: 30px;
  width: 485px;
  height: 364px;
  overflow-y: scroll;
  border-bottom: #20558b solid 1px;
  position: relative;
}

.inputArea {
  height: 42px;
  margin-top: 25px;
}

.inputArea input {
  width: 330px;
  height: 38px;
  line-height: 38px;
  float: left;
  margin-left: 14px;
  border: #d0cfcf solid 1px;
  border-radius: 4px;
  text-indent: 14px;
  box-shadow: 1px 1px 2px 0 #d0cfcf;
  font-size: 14px;
}

.inputArea span {
  cursor: pointer;
  float: left;
  margin-left: 12px;
  color: #fff;
  font-size: 14px;
  width: 90px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 4px;
  background: #00a3f0;
}

.inputArea span:hover {
  background: #54c4f8;
}
.bj-1{
    position: absolute;
    left:-1px;
    top:-1px;
}
.bj-2{
    position: absolute;
    right:-1px;
    top:-1px;
}
.bj-3{
    position: absolute;
    right:-1px;
    bottom:-1px;
}
.bj-4{
    position: absolute;
    left:-1px;
    bottom:-1px;
}
</style>
