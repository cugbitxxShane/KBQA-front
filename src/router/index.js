import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home.vue'
import Hello from '@/components/hello/hello.vue'
import SampleIntraPulseRec from '@/components/sample_base/sample_intra_pulse_rec.vue'
import SampleSignalSortPdwCd from '@/components/sample_base/sample_signal_sort_pdw_cd.vue'
import SampleStateRecPdwCdHr from '@/components/sample_base/sample_state_rec_pdw_cd_hr.vue'
import SampleStateRecPdwCdJr from '@/components/sample_base/sample_state_rec_pdw_cd_jr.vue'
import SampleStateRecPdwCdMr from '@/components/sample_base/sample_state_rec_pdw_cd_mr.vue'
import SampleStateRecPdwKdjL from '@/components/sample_base/sample_state_rec_pdw_kdj_l.vue'
import SampleStateRecPdwKdjP1 from '@/components/sample_base/sample_state_rec_pdw_kdj_p1.vue'
import SampleStateRecPdwKdjP2 from '@/components/sample_base/sample_state_rec_pdw_kdj_p2.vue'
import SampleStateRecPdwKdjS from '@/components/sample_base/sample_state_rec_pdw_kdj_s.vue'
import SampleStateRecPdwKdjX1 from '@/components/sample_base/sample_state_rec_pdw_kdj_x1.vue'
import SampleStateRecPdwKdjX2 from '@/components/sample_base/sample_state_rec_pdw_kdj_x2.vue'
import SampleStateRecPdwKdjX3 from '@/components/sample_base/sample_state_rec_pdw_kdj_x3.vue'
import TarTotal from '@/components/traget_base/target_total.vue'
import Radarcd1 from '@/components/traget_base/target_cd/radar_cd_1.vue'
import Radarcd2 from '@/components/traget_base/target_cd/radar_cd_2.vue'
import Radarcd3 from '@/components/traget_base/target_cd/radar_cd_3.vue'
import Radarcd4 from '@/components/traget_base/target_cd/radar_cd_4.vue'
import Radarcd5 from '@/components/traget_base/target_cd/radar_cd_5.vue'
import Radarcd6 from '@/components/traget_base/target_cd/radar_cd_6.vue'
import Radarcd7 from '@/components/traget_base/target_cd/radar_cd_7.vue'
import Radarcd8 from '@/components/traget_base/target_cd/radar_cd_8.vue'
import Radarcd9 from '@/components/traget_base/target_cd/radar_cd_9.vue'
import Radarcd10 from '@/components/traget_base/target_cd/radar_cd_10.vue'
import Radarcdstate11 from '@/components/traget_base/target_cd/radar_cd_state_11.vue'
import Radarcdstate12 from '@/components/traget_base/target_cd/radar_cd_state_12.vue'
import Radarcdstate13 from '@/components/traget_base/target_cd/radar_cd_state_13.vue'
import Radargl1 from '@/components/traget_base/target_gl/radar_gl_1.vue'
import Radargl2 from '@/components/traget_base/target_gl/radar_gl_2.vue'
import Radargl3 from '@/components/traget_base/target_gl/radar_gl_3.vue'
import Radargl4 from '@/components/traget_base/target_gl/radar_gl_4.vue'
import Radargl5 from '@/components/traget_base/target_gl/radar_gl_5.vue'
import Radargl6 from '@/components/traget_base/target_gl/radar_gl_6.vue'
import Radargl7 from '@/components/traget_base/target_gl/radar_gl_7.vue'
import Radargl8 from '@/components/traget_base/target_gl/radar_gl_8.vue'
import Radarhf1 from '@/components/traget_base/target_hf/radar_hf_simu_1.vue'
import Radarkdj1 from '@/components/traget_base/target_kdj/radar_kdj_1.vue'
import Radarkdj2 from '@/components/traget_base/target_kdj/radar_kdj_2.vue'
import Radarkdj3 from '@/components/traget_base/target_kdj/radar_kdj_3.vue'
import Radarkdj4 from '@/components/traget_base/target_kdj/radar_kdj_4.vue'
import Radarkdj5 from '@/components/traget_base/target_kdj/radar_kdj_5.vue'
import Radarkdj6 from '@/components/traget_base/target_kdj/radar_kdj_6.vue'
import Radarkdj7 from '@/components/traget_base/target_kdj/radar_kdj_7.vue'
import ModelTotal from '@/components/model_base/model_total.vue'
import Welcome from '@/components/admin/welcome/welcome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        {
          name: 'sample_intra_pulse_rec',
          path: '/sample_intra_pulse_rec',
          component: SampleIntraPulseRec
        },
        {
          name: 'sample_signal_sort_pdw_cd',
          path: '/sample_signal_sort_pdw_cd', // 注意：需要在path前加上“/”，否则跳转异常，除非home的path为“/”
          component: SampleSignalSortPdwCd
        },
        {
          name: 'sample_state_rec_pdw_cd_hr',
          path: '/sample_state_rec_pdw_cd_hr',
          component: SampleStateRecPdwCdHr
        },
        {
          name: 'sample_state_rec_pdw_cd_jr',
          path: '/sample_state_rec_pdw_cd_jr',
          component: SampleStateRecPdwCdJr
        },
        {
          name: 'sample_state_rec_pdw_cd_mr',
          path: '/sample_state_rec_pdw_cd_mr',
          component: SampleStateRecPdwCdMr
        },
        {
          name: 'sample_state_rec_pdw_kdj_l',
          path: '/sample_state_rec_pdw_kdj_l',
          component: SampleStateRecPdwKdjL
        },
        {
          name: 'sample_state_rec_pdw_kdj_p1',
          path: '/sample_state_rec_pdw_kdj_p1',
          component: SampleStateRecPdwKdjP1
        },
        {
          name: 'sample_state_rec_pdw_kdj_p2',
          path: '/sample_state_rec_pdw_kdj_p2',
          component: SampleStateRecPdwKdjP2
        },
        {
          name: 'sample_state_rec_pdw_kdj_s',
          path: '/sample_state_rec_pdw_kdj_s',
          component: SampleStateRecPdwKdjS
        },
        {
          name: 'sample_state_rec_pdw_kdj_x1',
          path: '/sample_state_rec_pdw_kdj_x1',
          component: SampleStateRecPdwKdjX1
        },
        {
          name: 'sample_state_rec_pdw_kdj_x2',
          path: '/sample_state_rec_pdw_kdj_x2',
          component: SampleStateRecPdwKdjX2
        },
        {
          name: 'sample_state_rec_pdw_kdj_x3',
          path: '/sample_state_rec_pdw_kdj_x3',
          component: SampleStateRecPdwKdjX3
        },
        // {
        //   name: 'behaviorPDW_Basic',
        //   path: '/behaviorPDW_Basic',
        //   component: BehaviorPDWBasic
        // },
        // {
        //   name: 'behaviorPDW_Data',
        //   path: '/behaviorPDW_Data',
        //   component: BehaviorPDWData
        // },
        // {
        //   name: 'behaviorPDW_Mod',
        //   path: '/behaviorPDW_Mod',
        //   component: BehaviorPDWMod
        // },
        // {
        //   name: 'emitterPDW_Basic',
        //   path: '/emitterPDW_Basic',
        //   component: EmitterPDWBasic
        // },
        // {
        //   name: 'emitterPDW_Data',
        //   path: '/emitterPDW_Data',
        //   component: EmitterPDWData
        // },
        // {
        //   name: 'emitterPDW_Mod',
        //   path: '/emitterPDW_Mod',
        //   component: EmitterPDWMod
        // },
        // {
        //   name: 'emitterWav_Basic',
        //   path: '/emitterWav_Basic',
        //   component: EmitterWavBasic
        // },
        // {
        //   name: 'emitterWav_Data',
        //   path: '/emitterWav_Data',
        //   component: EmitterWavData
        // },
        // {
        //   name: 'emitterWav_Mod',
        //   path: '/emitterWav_Mod',
        //   component: EmitterWavMod
        // },
        // {
        //   name: 'statusPDW_Basic',
        //   path: '/statusPDW_Basic',
        //   component: StatusPDWBasic
        // },
        // {
        //   name: 'statusPDW_Data',
        //   path: '/statusPDW_Data',
        //   component: StatusPDWData
        // },
        // {
        //   name: 'statusPDW_Mod',
        //   path: '/statusPDW_Mod',
        //   component: StatusPDWMod
        // },
        // {
        //   name: 'statusWav_Basic',
        //   path: '/statusWav_Basic',
        //   component: StatusWavBasic
        // },
        // {
        //   name: 'statusWav_Data',
        //   path: '/statusWav_Data',
        //   component: StatusWavData
        // },
        {
          name: 'target_total',
          path: '/target_total',
          component: TarTotal
        },
        {
          name: 'radar_cd_1',
          path: '/radar_cd_1',
          component: Radarcd1
        },
        {
          name: 'radar_cd_2',
          path: '/radar_cd_2',
          component: Radarcd2
        },
        {
          name: 'radar_cd_3',
          path: '/radar_cd_3',
          component: Radarcd3
        },
        {
          name: 'radar_cd_4',
          path: '/radar_cd_4',
          component: Radarcd4
        },
        {
          name: 'radar_cd_5',
          path: '/radar_cd_5',
          component: Radarcd5
        },
        {
          name: 'radar_cd_6',
          path: '/radar_cd_6',
          component: Radarcd6
        },
        {
          name: 'radar_cd_7',
          path: '/radar_cd_7',
          component: Radarcd7
        },
        {
          name: 'radar_cd_8',
          path: '/radar_cd_8',
          component: Radarcd8
        },
        {
          name: 'radar_cd_9',
          path: '/radar_cd_9',
          component: Radarcd9
        },
        {
          name: 'radar_cd_10',
          path: '/radar_cd_10',
          component: Radarcd10
        },
        {
          name: 'radar_cd_state_11',
          path: '/radar_cd_state_11',
          component: Radarcdstate11
        },
        {
          name: 'radar_cd_state_12',
          path: '/radar_cd_state_12',
          component: Radarcdstate12
        },
        {
          name: 'radar_cd_state_13',
          path: '/radar_cd_state_13',
          component: Radarcdstate13
        },
        {
          name: 'radar_gl_1',
          path: '/radar_gl_1',
          component: Radargl1
        },
        {
          name: 'radar_gl_2',
          path: '/radar_gl_2',
          component: Radargl2
        },
        {
          name: 'radar_gl_3',
          path: '/radar_gl_3',
          component: Radargl3
        },
        {
          name: 'radar_gl_4',
          path: '/radar_gl_4',
          component: Radargl4
        },
        {
          name: 'radar_gl_5',
          path: '/radar_gl_5',
          component: Radargl5
        },
        {
          name: 'radar_gl_6',
          path: '/radar_gl_6',
          component: Radargl6
        },
        {
          name: 'radar_gl_7',
          path: '/radar_gl_7',
          component: Radargl7
        },
        {
          name: 'radar_gl_8',
          path: '/radar_gl_8',
          component: Radargl8
        },
        {
          name: 'radar_hf_simu_1',
          path: '/radar_hf_simu_1',
          component: Radarhf1
        },
        {
          name: 'radar_kdj_1',
          path: '/radar_kdj_1',
          component: Radarkdj1
        },
        {
          name: 'radar_kdj_2',
          path: '/radar_kdj_2',
          component: Radarkdj2
        },
        {
          name: 'radar_kdj_3',
          path: '/radar_kdj_3',
          component: Radarkdj3
        },
        {
          name: 'radar_kdj_4',
          path: '/radar_kdj_4',
          component: Radarkdj4
        },
        {
          name: 'radar_kdj_5',
          path: '/radar_kdj_5',
          component: Radarkdj5
        },
        {
          name: 'radar_kdj_6',
          path: '/radar_kdj_6',
          component: Radarkdj6
        },
        {
          name: 'radar_kdj_7',
          path: '/radar_kdj_7',
          component: Radarkdj7
        },
        {
          name: 'model_total',
          path: '/model_total',
          component: ModelTotal
        },
        {
          name: 'welcome',
          path: '/welcome',
          component: Welcome
        }
      ]
    },
    {
      name: 'hello',
      path: '/',
      component: Hello
    }
  ]
})
