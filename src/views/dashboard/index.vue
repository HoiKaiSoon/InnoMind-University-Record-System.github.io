<template>
  <div class="dashboard">
    <div class="container">
      <!-- 左侧内容 -->
      <div class="left">
        <div class="panel">
          <!-- 个人信息 -->
          <div class="user-info">
            <img class="avatar" src="../../assets/logo/innomind-university-favicon.png" alt="">
            <div class="company-info">
              <div class="title">
                InnoMind University Record System
              </div>
            </div>
          </div>
          <!-- 代办 -->
          <div class="todo-list">
            <h3>Hi, hope you have a good day!</h3>
          </div>
        </div>
        <!-- 快捷入口 -->
        <div class="panel">
          <div class="panel-title"><strong>Quick Entry</strong></div>
          <div class="quick-entry">
            <router-link to="/system/course">
              <div class="entry-item">
                <div class="entry-icon role" />
                <span>Course</span>
              </div>
            </router-link>
            <router-link to="/system/student">
              <div class="entry-item">
                <div class="entry-icon role" />
                <span>Student</span>
              </div>
            </router-link>
            <router-link to="/system/subject">
              <div class="entry-item">
                <div class="entry-icon role" />
                <span>Subject</span>
              </div>
            </router-link>
            <router-link to="/system/result">
              <div class="entry-item">
                <div class="entry-icon role" />
                <span>Result</span>
              </div>
            </router-link>
            <router-link to="/system/dept">
              <div class="entry-item">
                <div class="entry-icon role" />
                <span>Department</span>
              </div>
            </router-link>
            <router-link to="/system/emp">
              <div class="entry-item">
                <div class="entry-icon role" />
                <span>Employee</span>
              </div>
            </router-link>
            <router-link to="/system/hostel">
              <div class="entry-item">
                <div class="entry-icon role" />
                <span>Hostel</span>
              </div>
            </router-link>
            <router-link to="/system/tenant">
              <div class="entry-item">
                <div class="entry-icon role" />
                <span>Tenant</span>
              </div>
            </router-link>
            <router-link to="/operatelog">
              <div class="entry-item">
                <div class="entry-icon role" />
                <span>Monitor</span>
              </div>
            </router-link>
          </div>
        </div>
        <!-- 图表数据 -->
        <div class="panel">
          <div class="panel-title"><strong>Vision</strong></div>
          <div class="chart-container">
            <div class="chart-info">
              <div class="info-main">
                <img src="~@/assets/logo/vision.png" alt="Vision" width="900" height="400">
              </div>
              <!-- <div class="info-list">
                <div class="info-list-item">
                  <span>待申报(人)</span>
                  <count-to
                    :start-val="0"
                    :end-val="117"
                    :duration="1000"
                  />
                </div>
                <div class="info-list-item">
                  <span>申报中(人)</span>
                  <count-to
                    :start-val="0"
                    :end-val="167"
                    :duration="1000"
                  />
                </div>
                <div class="info-list-item">
                  <span>已申报(人)</span>
                  <count-to
                    :start-val="0"
                    :end-val="24"
                    :duration="1000"
                  />
                </div>
              </div> -->
            </div>
            <div class="chart">
            <!-- 图表 -->
            </div>
          </div>
        </div>
        <!-- 图表数据 -->
        <div class="panel">
          <div class="panel-title"><strong>Mission</strong></div>
          <div class="chart-container">
            <div class="chart-info">
              <div class="info-main">
                <img src="~@/assets/logo/mission.png" alt="Vision" width="900" height="400">
              </div>
              <div class="info-list">
                <div class="info-list-item">
                  <!-- <span>待申报(人)</span>
                  <count-to
                    :start-val="0"
                    :end-val="345"
                    :duration="1000"
                  /> -->
                </div>
                <div class="info-list-item">
                  <!-- <span>申报中(人)</span>
                  <count-to
                    :start-val="0"
                    :end-val="109"
                    :duration="1000"
                  /> -->
                </div>
                <div class="info-list-item">
                  <!-- <span>已申报(人)</span>
                  <count-to
                    :start-val="0"
                    :end-val="77"
                    :duration="1000"
                  /> -->
                </div>
              </div>
            </div>
            <div class="chart">
              <!-- 图表 -->
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧内容 -->
      <div class="right">
        <!-- 帮助链接 -->
        <div class="panel">
          <div class="help">
            <div class="help-left">
              <div class="panel-title"><strong>Support</strong></div>
              <div class="help-list">
                <div class="help-block">
                  <i class="icon-help" />
                  <a href="mailto:support@gmail.com">Email Support</a>
                </div>
                <div class="help-block">
                  <i class="icon-support" />
                  <a href="https://wa.me/60123456789" target="_blank">WhatsApp Support</a>
                </div>
              </div>
            </div>
            <div class="help-right">
              <div class="calendar">
                <el-calendar v-model="value" />
              </div>
            </div>
          </div>
        </div>
        <!-- 通知公告 -->
        <div class="panel">
          <div class="panel-title"><strong>Announcement</strong></div>
          <div class="information-list">
            <div class="information-list-item">
              <img src="@/assets/logo/innomind-university-favicon.png" alt="">
              <div>
                <p>
                  <span class="col">Management</span> <!--发布了
                  第1期“传智大讲堂”互动讨论获奖名单公布 -->
                </p>
                <p>Please pay attention to the record of results completed before June. Thank you!</p>
              </div>
            </div>
            <div class="information-list-item">
              <img src="@/assets/logo/innomind-university-favicon.png" alt="">
              <div>
                <p>
                  <span class="col">Management</span> <!-- 发布了
                  第1期“传智大讲堂”互动讨论获奖名单公布 -->
                </p>
                <p>Please note that the school cafeteria will be under renovation, please remind students. Thank you!</p>
              </div>
            </div>
            <div class="information-list-item">
              <img src="@/assets/logo/innomind-university-favicon.png" alt="">
              <div>
                <p>
                  <span class="col">Management</span> <!-- 发布了
                  第1期“传智大讲堂”互动讨论获奖名单公布 -->
                </p>
                <p>Please note that we will hold a reading theme exhibition on April 23, which is World Book & Copyright Day. Please call on students to actively participate in this event. Thank you!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div></template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  data() {
    return {
      value: new Date()
    }
  },
  computed: {

  },
  created() {
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.dashboard {
  background: #f5f6f8;
  width: 100%;
  min-height: calc(100vh - 80px);

  ::v-deep .el-calendar-day {
  height:  40px;
 }
 ::v-deep .el-calendar-table__row td,::v-deep .el-calendar-table tr td:first-child, ::v-deep .el-calendar-table__row td.prev{
  border:none;
 }
.date-content {
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.date-content .rest {
  color: #fff;
  border-radius: 50%;
  background: rgb(250, 124, 77);
  width: 20px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
  font-size: 12px;
  margin-left: 10px;
}
.date-content .text{
  width: 20px;
  height: 20px;
  line-height: 20px;
 display: inline-block;

}
::v-deep .el-calendar-table td.is-selected .text{
   background: #409eff;
   color: #fff;
   border-radius: 50%;
 }
 ::v-deep .el-calendar__header {
   display: none
 }
  .container {
    display: flex;
    .right {
      width: 40%;
      .panel {
        margin-left: 8px;
      }
      :nth-child(1) {
        margin-top: 0;
      }
    }
    .left {
      flex: 1;
      :nth-child(1) {
        margin-top: 0;
      }
    }
    .panel {
      background-color: #fff;

      margin-top: 8px;
      padding: 20px;
      .panel-title {
        font-size: 16px;
        color: #383c4e;
        font-weight: 500;
      }
      // 用户信息样式
      .user-info {
        display: flex;
        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background-color: #d9d9d9;
          line-height: 48px;
          text-align: center;
        }
         .username {
           width: 30px;
           height: 30px;
           text-align: center;
           line-height: 30px;
           border-radius: 50%;
           background: #04c9be;
           color: #fff;
           margin-right: 4px;
         }
        .company-info {
          margin-left: 10px;
          height: 48px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .title {
            color: #383c4e;
            font-weight: 500;
            font-size: 16px;
            font-family: PingFang SC, PingFang SC-Medium;
            span {
              font-size: 12px;
              background: #f5f6f8;
              text-align: center;
              padding: 2px 8px;
              border-radius: 2px;
              color: #697086;
            }
          }
          .depart {
            font-size: 14px;
            color: #697086;
            font-weight: 400;
          }
        }
      }
      // 代办样式
      .todo-list {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        color: #409eff;
        .todo-item {
          width: 18%;
          height: 90px;
          display: flex;
          flex-direction: column;
          padding: 10px;
          justify-content: space-around;
          :nth-child(1) {
            color: #697086;
            font-size: 14px;
          }
          :nth-child(2) {
            color: #383c4e;
            font-size: 30px;
            font-weight: 500;
          }
        }
      }
      // 快捷入口
      .quick-entry {
        margin-top: 16px;
        display: flex;
        .entry-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 60px;
          &:nth-child(1) {
            margin-left: 45px;
          }
          .entry-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background: #f5f6f8;
            background-size: cover;
            &.approval {
              background-image: url('~@/assets/logo/innomind-university-favicon.png');
            }
             &.social {
              background-image: url('~@/assets/logo/innomind-university-favicon.png');
            }
             &.salary {
              background-image: url('~@/assets/logo/innomind-university-favicon.png');
            }
            &.role {
              background-image: url('~@/assets/logo/innomind-university-favicon.png');
            }
             &.bpm {
              background-image: url('~@/assets/logo/innomind-university-favicon.png');
            }
          }
          span {
            color: #697086;
            font-size: 14px;
            margin-top: 8px;
          }
        }
      }
      // 图表数据
      .chart-container {
        display: flex;
        .chart-info {
         width: 240px;
          margin-top: 10px;
          .info-main {
            padding: 10px;
            display: flex;
            flex-direction: column;
            :nth-child(1) {
              font-size: 14px;
              color: #697086;
            }
            :nth-child(2) {
              margin-top: 10px;
              font-size: 30px;
              color: #04c9be;
              font-weight: 500;
            }
          }
          .info-list {
            background: #f5f6f8;
            border-radius: 4px;
            padding: 12px 15px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            .info-list-item {
              width: 50%;
              margin-top: 10px;
              display: flex;
              flex-direction: column;

              :nth-child(1) {
                font-size: 14px;
                color: #697086;
              }
              :nth-child(2) {
                margin-top: 10px;
                font-size: 30px;
                color: #383c4e;
                font-weight: 500;
              }
            }
          }
        }
        .chart {
          flex:1
        }
      }
      // 帮助链接
      .help {
        display: flex;
        .help-left {
          width: 40%;
        }
        .help-right {
          flex: 1;
        }
        .help-list {
          .help-block {
            background: #f5f6f8;
            border-radius: 4px;
            width: 264px;
            height: 54px;
            padding: 17px 10px;
            font-size: 14px;
            color: #697086;
            margin-top: 10px;
            i {
              width: 14px;
              height: 14px;
              display: inline-block;
              background-size: cover;
              vertical-align: middle;
              margin-right: 14px;
            }
            i.icon-help {
              background-image: url("~@/assets/logo/email-icon.png");
            }
             i.icon-support {
              background-image: url("~@/assets/logo/phone-icon.png");
            }
             i.icon-add {
              background-image: url("~@/assets/logo/innomind-university-favicon.png");
            }
             i.icon-entry {
              background-image: url("~@/assets/logo/innomind-university-favicon.png");
            }
          }
        }
      }
      // 通知公告
      .information-list {
        margin-top: 20px;
        .information-list-item {
          display: flex;
          align-items: center;
          margin:15px 0;
          img {
            width: 40px;
            height: 40px;
            border: 50%;
          }
         .col {
           color: #8a97f8;
         }
         div :nth-child(2) {
          color: #697086;
          font-size: 14px;
         }
        }
      }
    }
  }
}
</style>
