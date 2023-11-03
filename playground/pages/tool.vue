<template>
  <ToolContentLayout>

    <template #menu>

      <div>
        <h2 class="h4">Getting started</h2>

        <Nav vertical anchor>
          <NavItem to="/" active>Required parameters</NavItem>
          <NavItem to="/qsd">Optionals parameters</NavItem>
          <NavItem to="/qsdqsd">Seconds parameters</NavItem>
        </Nav>
      </div>

      <div>
        <h2 class="h4">Parameters</h2>
        <FormCheckbox switch>Only Matomo</FormCheckbox>
      </div>

      <div>
        <h2 class="h4">Ressources</h2>
        <Nav vertical>
          <NavItem external to="https://google.com" active>
            <template #icon>
              <IconCopy/>
            </template>
            Official documentation
          </NavItem>
          <NavItem external to="https://ronan-hello.fr">
            <template #icon>
              <IconCopy/>
            </template>
            Learn more about parameters
          </NavItem>
        </Nav>
      </div>

      <ToolCtaCard/>

    </template>


    <Card title="Required parameters" v-for="i in [1, 2, 3, 4]">
      <h2 class="h3 card-title">Required parameters</h2>

      <fieldset>
        <FormGroup label="Page URL" description="The full website URL (https://your-website.com)" class="mb-4">
          <FormInputGroup>
            <template #prepend>
              <code class="input-group-text">&utm_source</code>
            </template>
            <FormInput value="https://monsite.com"/>
          </FormInputGroup>
        </FormGroup>

        <FormGroup label="Page URL" description="The full website URL (https://your-website.com)" class="mb-4">
          <FormInputGroup>
            <template #prepend>
              <code class="input-group-text">&utm_source</code>
            </template>
            <FormInput value="https://monsite.com"/>
          </FormInputGroup>
        </FormGroup>

        <FormGroup label="Page URL" description="The full website URL (https://your-website.com)" class="mb-4">
          <FormInputGroup>
            <template #prepend>
              <code class="input-group-text">&utm_source</code>
            </template>
            <FormInput value="https://monsite.com"/>
          </FormInputGroup>
        </FormGroup>

        <FormGroup label="Page URL" description="The full website URL (https://your-website.com)">
          <FormInputGroup>
            <template #prepend>
              <code class="input-group-text">&utm_source</code>
            </template>
            <FormInput value="https://monsite.com"/>
          </FormInputGroup>
        </FormGroup>
      </fieldset>
    </Card>


    <template #output>

      <ToolOutputCopyUrl url="https://openmost.io"/>

      <ToolOutputCard title="Or use this QR code">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, corporis!
      </ToolOutputCard>

    </template>

  </ToolContentLayout>
</template>
<script setup lang="ts">
</script>
