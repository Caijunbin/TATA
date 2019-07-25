<template>
  <div>
    <section id="content">
      <div class="contaniner">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="标题">
            <el-input v-model="form.title" placeholder="请输入标题"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'fabu',
  data () {
    return {
      from: { title: ''}
    }
  }
}
</script>

<style scoped>

</style>
