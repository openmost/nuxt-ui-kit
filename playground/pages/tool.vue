<template>
  <ToolContentLayout>

    <template #menu>

      <div>
        <h2 class="h4">Getting started</h2>
        <FormCheckbox switch>Only Matomo</FormCheckbox>
      </div>

      <h2 class="h4">Parameters</h2>


      <h2 class="h4">Ressources</h2>

      <ToolCtaCard/>

    </template>


    <Card title="Required parameters" v-for="i in [1, 2, 3, 4]">
      <h2 class="h3 card-title">Required parameters</h2>

      <fieldset>
        <FormGroup label="Page URL" description="The full website URL (https://your-website.com)">
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

        <FormGroup label="Page URL" description="The full website URL (https://your-website.com)">
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
