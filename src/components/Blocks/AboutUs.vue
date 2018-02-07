<template>
  <div class="aboutUs" data-aos="fade-up">
    <Advantages />
    <Information class="inform">
      <template slot="head-title">О нас</template>
      <template slot="head">Nuvola</template>
      <template slot="text">Наша компания создана в 2016 году. Основными задачами производства, на первом этапе, стало обслуживание всего одного, но крупного заказчика, который и по сегодня является постоянным партнером. Мы каждый день работаем над усовершенствованием нашей технологической линии и повышаем профессиональную подготовку кадров. Такой подход позволяет нам получать большое количество новых заказов, в подтверждении чего, мы уже имеем положительный опыт обслуживания оптовых заказов не только из Украины, но и нескольких стран Европы. Своей сильной стороной считаем не только качество и скорость, но и наше сотрудничество и договоренности с крупными заводами стран Азии по производству текстиля. Это позволяет получить наилучшие цены, что в свою очередь влияет на снижение конечной себестоимости изделий для заказчика.</template>
      <img slot="img" class="img" src="/static/blocks/team.jpg" alt="team">
    </Information>
  </div>
</template>

<script>
import Advantages from './Advantages';

export default {
  components: {
    Advantages,
  }  
}
</script>


<style scoped lang="stylus">
.aboutUs
  position relative
  z-index 2

.inform
  padding-top 15rem

.img
  margin-top: 5.5rem
</style>
