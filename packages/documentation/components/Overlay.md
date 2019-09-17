```js
<Box width={300} height={300}>
    <Overlay onClick={() => alert('overlay clicked')}>
        <Card bg="white" boxShadowSize="md" p={3}>
            <Heading tag="h4">Heading</Heading>
            <Divider my={2} />
            <Text>Lorem ipsum</Text>
        </Card>
    </Overlay>
</Box>
```

```js
initialState = {
  loading: false
}

const toggleOverlay = () => {
  setState({ loading: !state.loading })
}
;
<Box>
    <Button mb={3} onClick={toggleOverlay} size="small">
        {state.loading ? 'hide' : 'show' } loading 
    </Button>
    <Card p={4}>
        {state.loading && (
            <Overlay>
                <Icon spin fontSize={50} color="white" name="spinner" />
            </Overlay>
        )}
        <Heading mb={2}>What is Lorem Ipsum?</Heading>
        <Text>
            <Text inline bold>Lorem Ipsum</Text> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
    </Card>
</Box>
```