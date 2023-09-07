<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{active:current === 'all'}">All Project</button>
    <button @click="updateFilter('completed')" :class="{active:current === 'completed'}">Completed Project</button>
    <button @click="updateFilter('ongoing')" :class="{active:current === 'ongoing'}">Ongoing Project</button>
    <nav class="center">
    <button @click="updateFilter('assigned')" :class="{active:current === 'assigned'}">Assigned Project</button>
    <button @click="updateFilter('unassigned')" :class="{active:current === 'unassigned'}">Unassigned Project</button>
    </nav>

  </nav>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    updateFilter(by) {
      this.$emit("filterChange", by);
    },
  },
};
</script>

<style>
    .filter-nav button {
        background: none;
        border: none;
        outline: none;
        color: #bbb;
        font-size: 15px;
        text-transform: uppercase;
        margin-right: 10px;
        letter-spacing: 1px;
        font-weight: bold;
        cursor: pointer;
    }
    .filter-nav button.active {
        color: #555;
    }
    .center {
      padding: 0px;
      text-align: center;
    }
</style>
