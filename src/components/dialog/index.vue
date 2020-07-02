<template>
  <div>
    <el-dialog title="提示" :visible.sync="newDialogVisible" width="30%">
      <span>{{ content }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleClick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["content", "link", "dialogVisible"],
  data() {
    return {
      newDialogVisible: this.dialogVisible
    };
  },
  methods: {
    handleClick() {
      if (this.link) {
        this.$router.push({
          path: this.link
        });
      } else {
        this.$emit("update:dialogVisible", false);
      }
    }
  },
  watch: {
    dialogVisible() {
      this.newDialogVisible = this.dialogVisible;
    },
    newDialogVisible() {
      this.$emit("update:dialogVisible", this.newDialogVisible);
    }
  }
};
</script>

<style></style>
