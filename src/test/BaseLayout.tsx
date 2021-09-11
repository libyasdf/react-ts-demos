class BaseLayout  extends React.Component<object, object> {
    render() {
        return(
            <Layout className="main">
                <Layout.Header className="main-header"><Header/></Layout.Header>
                <Layout className="main-content">
                    <Navside/>
                    <Layout.Content><Routes/></Layout.Content>
                </Layout>
            </Layout>
        )
    }
}