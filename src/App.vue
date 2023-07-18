<template>
  <section>
    <a-descriptions title="基础服务"/>
    <a-space v-for="item in servicesList.basicServices" :key="item.key">
      <a-card size="small" :title="item.title" class="services-card">
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
        <div v-for="settingItem in item.setting" :key="settingItem.key" class="card-content">
          <a-col :span="8">
            {{settingItem.title}}
          </a-col>
          <a-col :span="16">
            <a-input v-model="settingItem.value" />
          </a-col>
        </div>
        <template #actions>
          <download-outlined v-if="item.serviceType === 1 && item.installStatus === 0 " />
          <delete-outlined v-if="item.serviceType === 1 && item.installStatus === 1 " />
          <more-outlined />
        </template>

      </a-card>
    </a-space>

    <a-descriptions title="后端服务组件" />
    <a-space v-for="item in servicesList.backendServices" :key="item.key">
      <a-card size="small" :title="item.title" class="services-card">
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
        <div v-for="settingItem in item.setting" :key="settingItem.key" class="card-content">
          <a-col :span="8">
            {{settingItem.title}}
          </a-col>
          <a-col :span="16">
            <a-input v-model="settingItem.value" />
          </a-col>
        </div>
        <template #actions>
          <download-outlined v-if="item.serviceType === 1 && item.installStatus === 0 " />
          <delete-outlined v-if="item.serviceType === 1 && item.installStatus === 1 " />
          <more-outlined />
        </template>

      </a-card>
    </a-space>

    <a-descriptions title="业务板块" />
    <a-space v-for="item in servicesList.businessServices" :key="item.key">
      <a-card size="small" :title="item.title" class="services-card">
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
        <div v-for="settingItem in item.setting" :key="settingItem.key" class="card-content">
          <a-col :span="8">
            {{settingItem.title}}
          </a-col>
          <a-col :span="16">
            <a-input v-model="settingItem.value" />
          </a-col>
        </div>
        <template #actions>
          <download-outlined v-if="item.serviceType === 1 && item.installStatus === 0 " />
          <delete-outlined v-if="item.serviceType === 1 && item.installStatus === 1 " />
          <more-outlined />
        </template>

      </a-card>
    </a-space>
    <a-divider orientation="left">安装日志</a-divider>

    <a-textarea
        rows="4"
        placeholder="安装进程展示"
        v-model:value="installLogs"
        disabled
    ></a-textarea>

  </section>
</template>

<script>
import { CheckCircleOutlined, CloseCircleOutlined, LoadingOutlined, DownloadOutlined, DeleteOutlined, MoreOutlined } from '@ant-design/icons-vue';

export default {
  name: 'App',
  components: {
    CheckCircleOutlined,
    CloseCircleOutlined,
    LoadingOutlined,
    DownloadOutlined,
    DeleteOutlined,
    MoreOutlined
  },
  data() {
    return {
      installLogs: '2023-7-18 20:46:75:  AI训练中心服务组件下载中...',
      servicesList: {
        basicServices:[
          {
            title: '鉴权服务',
            description: '鉴权服务',
            key: 'auth',
            installStatus: 1,
            runningStatus: 1,
            serviceType: 0,
            setting: [
              {
                title: '鉴权服务地址',
                key: 'authServer',
                type: 'String',
                value: '',
              }
            ],
          },
          {
            title: 'API网关',
            description: '各类接口的网关服务',
            key: 'api',
            installStatus: 1,
            runningStatus: 1,
            serviceType: 0,
            setting: [],
          },
          {
            title: '对象存储服务',
            description: '对象存储服务minio',
            key: 'minio',
            installStatus: 1,
            runningStatus: 1,
            serviceType: 0,
            setting: [],
          }
        ],
        backendServices:[
          {
            title: '物联网平台',
            description: '各类设备统一接入平台',
            key: 'iot',
            installStatus: 1,
            runningStatus: 1,
            serviceType: 1,
            setting: [],
          },
          {
            title: '流媒体平台',
            description: '流媒体平台',
            key: 'stream',
            installStatus: 0,
            runningStatus: 0,
            serviceType: 1,
            setting: [],
          },
        ],
        businessServices:[
          {
            title: '设备配置',
            description: '通用设备管理页面',
            key: 'device',
            installStatus: 1,
            runningStatus: 0,
            serviceType: 1,
            setting: [],
          },
          {
            title: '基础资料',
            description: '各类业务的基础资料',
            key: 'basicInfo',
            installStatus: 1,
            runningStatus: 1,
            serviceType: 1,
            setting: [],
          },
          {
            title: '工地实名制（福建）',
            description: '福建省工地实名制对接上报平台',
            key: 'site',
            installStatus: 0,
            runningStatus: 0,
            serviceType: 1,
            setting: [],
          },
          {
            title: '智慧停车系统',
            description: '停车场系统对接',
            key: 'parking',
            installStatus: 0,
            runningStatus: 0,
            serviceType: 1,
            setting: [],
          },
          {
            title: '考勤管理系统',
            description: '基于钉钉的考勤系统',
            key: 'attendance',
            installStatus: 0,
            runningStatus: 0,
            serviceType: 1,
            setting: [],
          },
          {
            title: 'AI训练中心',
            description: '零代码在线训练AI视觉模型',
            key: 'ai',
            installStatus: 0,
            runningStatus: 0,
            serviceType: 1,
            setting: [
              {
                title: '训练中心地址',
                key: 'aiServer',
                type: 'String',
                value: '',
              }
            ],
          },
          {
            title: '叉车管理系统',
            description: '叉车管理系统',
            key: 'forklift',
            installStatus: 0,
            runningStatus: 0,
            serviceType: 1,
            setting: [],
          },
        ],
      },

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 60px;
}
.services-card {
  margin: 10px 10px;
  width: 300px;
}
.card-content {
  display: flex;
  align-items: center;
}

</style>
