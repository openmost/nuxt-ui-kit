<template>

  <section>
    <SectionHeader title="Segments">
      <template #actions>
        <Button variant="outline-primary">
          <IconExport/>
          Export
        </Button>
        <Button variant="outline-danger">
          <IconDelete/>
          Delete
        </Button>
        <Button variant="primary">
          <IconImport/>
          Import
        </Button>
      </template>
    </SectionHeader>

    <div class="table-wrapper">

      <div class="py-3 px-4">
        <Row>
          <Col lg="3">
            <FormGroup>
              <FormInput/>
            </FormGroup>
          </Col>
        </Row>
      </div>

      <Table borderless>
        <thead>
        <tr>
          <th>-</th>
          <th>Name</th>
          <th>Definition</th>
          <th>Access</th>
          <th>Site ID</th>
          <th>Auto-archive</th>
          <th>User</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="i in [1, 2, 3, 4, 5,6 ,7 ,8 ,9, 10 ,11, 12 ,13 ,14 ,15 ,16]" :key="i">
          <td>01</td>
          <td><FormInput value="Segment name"/></td>
          <td><code>interaction==1</code></td>
          <td>
            <FormInput value="All users"/>
          </td>
          <td>All websites</td>
          <td>Real-time</td>
          <td>Ronan</td>
        </tr>
        </tbody>
      </Table>
    </div>

  </section>

</template>
<script setup lang="ts">
</script>

<style lang="scss">
.table-wrapper {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: var(--bs-surface);
}
</style>
