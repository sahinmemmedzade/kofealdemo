import React from 'react'
import Global from '../component/Global'
import Bolmeler from '../component/bolmeler'
import Kofeal from '../component/kofeal'
import Onlaynmagaza from '../component/Onlaynmagaza'
import Abunelik from '../component/Abunelik'
import Bizdendanisanlar from '../component/Bizdendanisanlar'
import Yaradici from '../component/Yaradici'
import BackToTopButton from '../component/backtotop'
import Uzvlerimizhome from '../component/uzvlerimizhome'
import Faqhome from '../component/Faqhome'

const Home = () => {
  return (
<div>
  <Global></Global>
  <Bolmeler></Bolmeler>
  <Uzvlerimizhome></Uzvlerimizhome>
  <Kofeal></Kofeal>
  <Onlaynmagaza></Onlaynmagaza>
  <Abunelik></Abunelik>
  <Faqhome></Faqhome>
  <Bizdendanisanlar></Bizdendanisanlar>
  <Yaradici></Yaradici>
  <BackToTopButton></BackToTopButton>
</div>
  )
}

export default Home