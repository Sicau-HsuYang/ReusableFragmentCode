<!--
 * @Author: JohnYang
 * @Date: 2020-08-16 20:23:25
 * @LastEditors: JohnYang
 * @LastEditTime: 2020-10-08 23:23:08
-->
<script lang="tsx">
import Vue, { CreateElement } from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import MessageTextarea from "./MessageTextarea.vue";
@Component({
  name: "FormControl",
  components: {
    MessageTextarea,
  },
})
export default class FormControl extends Vue {
  content: string = "";

  @Prop({
    type: [String],
    required: true,
  })
  type!: string;

  @Prop({
    required: true,
  })
  value!: string;

  created() {
    this.content = this.value;
  }

  setWatch() {
    this.$watch("value", function () {
      this.content = this.value;
    });
    this.$watch("content", function () {
      this.$emit("input", this.content);
    });
  }

  createOptions(h: CreateElement, { options, groups }) {
    let results = [];
    if (Array.isArray(options)) {
      results = options.map((opt) => {
        return <el-option {...{ attrs: opt, props: opt }}></el-option>;
      });
    } else if (Array.isArray(groups)) {
      results = groups.map((group) => {
        return (
          <el-option-group {...{ attrs: group, props: group }} label={group.label}>
            {group.options.map((opt) => {
              return <el-option {...{ attrs: opt, props: opt }}></el-option>;
            })}
          </el-option-group>
        );
      });
    }
    return results;
  }

  render(h: CreateElement) {
    let { options, groups, multiple, style } = this.$attrs;
    let controlType = this.type || "input";
    if (controlType === "select") {
      return (
        <el-select
          {...{
            props: this.$attrs,
            attrs: this.$attrs,
            on: {
              ...this.$listeners,
            },
          }}
          multiple={multiple}
          v-model={this.content}
          style={{ ...(style as any), width: "100%" }}
        >
          {this.createOptions(h, { options, groups })}
        </el-select>
      );
    } else if (
      ["date", "week", "datetime", "dates", "month", "year", "daterange", "datetimerange"].includes(
        controlType
      )
    ) {
      return (
        <el-date-picker
          {...{
            props: this.$attrs,
            attrs: this.$attrs,
            on: {
              ...this.$listeners,
            },
          }}
          v-model={this.content}
          type={controlType}
          style={style}
        />
      );
    } else if (controlType === "time") {
      return (
        <el-time-picker
          {...{
            props: this.$attrs,
            attrs: this.$attrs,
            on: {
              ...this.$listeners,
            },
          }}
          v-model={this.content}
          type={controlType}
          style={style}
        />
      );
    } else if (controlType === "textarea") {
      return (
        <MessageTextarea
          {...{
            props: this.$attrs,
            attrs: this.$attrs,
            on: {
              ...this.$listeners,
            },
          }}
          v-model={this.content}
        />
      );
    } else {
      return (
        <el-input
          {...{
            props: this.$attrs,
            attrs: this.$attrs,
            on: {
              ...this.$listeners,
            },
          }}
          type={controlType}
          v-model={this.content}
          style={style}
        />
      );
    }
  }
}
</script>
