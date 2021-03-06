/*
 * @Author: JohnYang
 * @Date: 2020-08-23 22:13:41
 * @LastEditors: JohnYang
 * @LastEditTime: 2020-08-28 23:28:06
 */
/**
 * 生成表格的默认配置
 */
export default class DefaultConfig {
  static CreatePermissions() {
    return {
      create: true,
      update: true,
      remove: true
    };
  }

  static CreateTableName() {
    return "base-table-" + (Math.random() * 1e10).toFixed(0);
  }

  static CreateDefaultTableColumn() {
    return {
      visible: true,
      label: "字段",
      showOverflowTooltip: true,
      width: undefined,
      minWidth: undefined,
      maxWidth: undefined,
      sortable: false,
      sortMethod: undefined,
      align: "left",
      filterable: false,
      order: undefined,
      html: undefined,
      formatter: undefined,
      $h: undefined
    };
  }

  static createDefaultTableConfig() {
    return {
      border: true,
      stripe: true,
      rowKey: "id",
      orderProp: "id",
      direction: "ASC",
      filterable: true,
      sortOrderMapping(direction) {
        return direction === null
          ? null
          : direction === "descending"
          ? "ASC"
          : "DESC";
      },
      pagination: {
        total: 0,
        currentPage: 1,
        pageSize: 10,
        options: [10, 25, 50, 100]
      }
    };
  }

  static EmptyValue = "--";
}
