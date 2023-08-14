<template>

    <a-descriptions title="基础服务"/>
    <a-space v-for="item in servicesList.basicServices" :key="item.key">
      <a-card hoverable size="small" :title="item.title" class="services-card">
        <template #extra>
          安装：
          <check-circle-outlined v-if="item.installStatus === 1" style="color:green"/>
          <close-circle-outlined v-if="item.installStatus === 0" style="color:red"/>
          <loading-outlined v-if="item.installStatus === 2"/>
          运行：
          <check-circle-outlined v-if="item.runningStatus === 1" style="color:green"/>
          <close-circle-outlined v-if="item.runningStatus === 0" style="color:red"/>
        </template>
        <div>
          <p style="color:lightgray">简介:{{item.description}}</p>
        </div>
        <div v-for="settingItem in item.settings" :key="settingItem.key" class="card-content">
          <a-col :span="8">
            {{settingItem.name}}
          </a-col>
          <a-col :span="16">
            <a-input v-model:value="settingItem.value" />
          </a-col>
        </div>
        <template #actions>
          <a-popconfirm
              v-if="item.installType === 1 && item.installStatus === 0 "
              title='确认下载安装组件？'
              ok-text='确认'
              cancel-text='取消'
              @confirm="loadService(item)"
          >
            <download-outlined />
          </a-popconfirm>
          <a-popconfirm
              v-if="item.installType === 1 && item.installStatus === 1 "
              title='确认删除组件？'
              ok-text='确认'
              cancel-text='取消'
              @confirm="removeService(item)"
          >
            <delete-outlined />
          </a-popconfirm>
          <a-dropdown>
            <more-outlined/>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a @click="moreClick">重启</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>

        </template>
      </a-card>

    </a-space>

    <a-descriptions title="后端服务组件" />
    <a-space v-for="item in servicesList.backendServices" :key="item.key">
      <a-card hoverable size="small" :title="item.title" class="services-card">
        <template #extra>
          安装：
          <check-circle-outlined v-if="item.installStatus === 1" style="color:green"/>
          <close-circle-outlined v-if="item.installStatus === 0" style="color:red"/>
          <loading-outlined v-if="item.installStatus === 2"/>
          运行：
          <check-circle-outlined v-if="item.runningStatus === 1" style="color:green"/>
          <close-circle-outlined v-if="item.runningStatus === 0" style="color:red"/>
        </template>
        <div>
          <p style="color:lightgray">简介:{{item.description}}</p>
        </div>
        <div v-for="settingItem in item.settings" :key="settingItem.key" class="card-content">
          <a-col :span="8">
            {{settingItem.name}}
          </a-col>
          <a-col :span="16">
            <a-input v-model:value="settingItem.value" />
          </a-col>
        </div>
        <template #actions>
          <a-popconfirm
              v-if="item.installType === 1 && item.installStatus === 0 "
              title='确认下载安装组件？'
              ok-text='确认'
              cancel-text='取消'
              @confirm="loadService(item)"
          >
            <download-outlined />
          </a-popconfirm>
          <a-popconfirm
              v-if="item.installType === 1 && item.installStatus === 1 "
              title='确认删除组件？'
              ok-text='确认'
              cancel-text='取消'
              @confirm="removeService(item)"
          >
            <delete-outlined />
          </a-popconfirm>
          <a-dropdown>
            <more-outlined/>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a @click="moreClick">重启</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>

        </template>
      </a-card>

    </a-space>

    <a-descriptions title="业务板块" />
    <a-space v-for="item in servicesList.businessServices" :key="item.key">
      <a-card hoverable size="small" :title="item.title" class="services-card">
        <template #extra>
          安装：
          <check-circle-outlined v-if="item.installStatus === 1" style="color:green"/>
          <close-circle-outlined v-if="item.installStatus === 0" style="color:red"/>
          <loading-outlined v-if="item.installStatus === 2"/>
          运行：
          <check-circle-outlined v-if="item.runningStatus === 1" style="color:green"/>
          <close-circle-outlined v-if="item.runningStatus === 0" style="color:red"/>
        </template>
        <div>
          <p style="color:lightgray">简介:{{item.description}}</p>
        </div>
        <div v-for="settingItem in item.settings" :key="settingItem.key" class="card-content">
          <a-col :span="8">
            {{settingItem.name}}
          </a-col>
          <a-col :span="16">
            <a-input v-model:value="settingItem.value" />
          </a-col>
        </div>
        <template #actions>
          <a-popconfirm
              v-if="item.installType === 1 && item.installStatus === 0 "
              title='确认下载安装组件？'
              ok-text='确认'
              cancel-text='取消'
              @confirm="loadService(item)"
          >
            <download-outlined />
          </a-popconfirm>
          <a-popconfirm
              v-if="item.installType === 1 && item.installStatus === 1 "
              title='确认删除组件？'
              ok-text='确认'
              cancel-text='取消'
              @confirm="removeService(item)"
          >
            <delete-outlined />
          </a-popconfirm>
          <a-dropdown>
            <more-outlined/>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a @click="moreClick">重启</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>

        </template>
      </a-card>
    </a-space>

    <div class="logContent">
      <a-divider orientation="left">安装日志</a-divider>
      <a-textarea
          rows="6"
          placeholder="安装进程展示"
          v-model:value="installLogs"
          disabled
          v-auto-animate
      ></a-textarea>
    </div>


</template>

<script>
import { CheckCircleOutlined, CloseCircleOutlined, LoadingOutlined, DownloadOutlined, DeleteOutlined, MoreOutlined } from '@ant-design/icons-vue';
import axios from 'axios';
export default {
  name: "adminSettings",
  components: {
    CheckCircleOutlined,
    CloseCircleOutlined,
    LoadingOutlined,
    DownloadOutlined,
    DeleteOutlined,
    MoreOutlined
  },
  mounted() {
    this.getServicesInfo();
    this.getLogs();
    // 创建定时器，用于轮询
    this.timer = setInterval(() => {
      this.getServicesInfo();
      this.getLogs();
    }, 1000);
  },
  beforeUnmount() {
    // 销毁定时器
    clearInterval(this.timer);
  },
  data() {
    return {
      installLogs: '',
      servicesList: {
        basicServices:[],
        backendServices:[],
        businessServices:[],
      },
    }
  },
  methods:{
    getServicesInfo(){
      let dcServicesList = {
        basicServices:[],
        backendServices:[],
        businessServices:[],
      }
      // 获取服务信息
      axios.get('/v1/adminSettings/listSysInstallServices').
      then(res => {
        let servicesData = res.data.data
        // console.log("servicesData",servicesData)
        // 遍历服务信息
        servicesData && servicesData.forEach(item => {
          if(item.serviceType === '0'){
            dcServicesList.basicServices.push(item)
          }
          if(item.serviceType === '1'){
            dcServicesList.backendServices.push(item)
          }
          if(item.serviceType === '2'){
            dcServicesList.businessServices.push(item)
          }
        })
        // console.log("this.servicesList",this.servicesList)
        // update servicesList
        this.servicesList = dcServicesList
      })
          .catch(err => {
            console.log(err);
          })
    },
    getLogs(){
      let tmpInstallLogs = '';
      axios.get('/v1/adminSettings/listSysInstallServicesLog')
        .then(res => {
          let logList = res.data.data;
          logList && logList.forEach(item => {
            //时间戳转换成时间
            let timeF = new Date(item.createTime).toLocaleString();
            tmpInstallLogs += timeF + ': ' + item.content + '\n'
          })
          // 更细installLogs
          this.installLogs = tmpInstallLogs
        })
        .catch(err => {
          console.log(err);
        })

    },
    loadService(service){
      let params = {
        servicesId: service.servicesId,
        settings: service.settings,
      }
      //如果settings不为空，遍历settings
      axios.post('/v1/adminSettings/installServices', params)
        .then(res => {
          console.log('下发安装指令成功',res);
          //刷新
          this.getServicesInfo()
        })
        .catch(err => {
          console.log(err);
        })
    },
    removeService(service){
      let params = {
        servicesId: service.servicesId,
      }
      axios.post('/v1/adminSettings/uninstallServices', params)
        .then(res => {
          console.log('下发卸载指令成功', res);
          //刷新
          this.getServicesInfo()
        })
        .catch(err => {
          console.log(err);
        })
    },
    moreClick(){
      //消息提醒
      this.$notification.open({
        message: '尚未开放',
        description:
            '该功能尚未开放，敬请期待！',
      });
    }
  }
}
</script>

<style scoped>
.services-card {
  margin: 10px 10px;
  width: 300px;
}
.card-content {
  display: flex;
  align-items: center;
}
.logContent {
  padding-bottom: 50px;
  padding-right: 100px;
}
</style>
