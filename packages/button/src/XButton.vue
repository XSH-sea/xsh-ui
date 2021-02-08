<template>
  <button
    class="xsh-button"
    :class="[`xsh-button-${size}`, `xsh-button-${type}`]"
  >
    <span :textStyle="textColor"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "XButton",
  props: {
    size: {
      type: String,
      default: "default",
    },
    type: {
      type: String,
      default: "default",
    },
    textColor: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style lang="scss" scoped>
.xsh-button {
  padding: 12px 20px;
  border: 2px solid;
  font-size: 14px;
}
.xsh-button-default {
  width: 98px;
  height: 46px;
  color: #606266;
  border-color: #606266;
  background-color: #fff;
}
.xsh-button-medium {
  width: 98px;
  height: 36px;
}
.xsh-button-small {
  width: 80px;
  height: 32px;
}
.xsh-button-mini {
  width: 80px;
  height: 28px;
}

.xsh-button-primary {
  color: #fff;
  background-color: #4091ff;
  border-color: #4091ff;
}
.xsh-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}
.xsh-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}
.xsh-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.xsh-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
</style>
