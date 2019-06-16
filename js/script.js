const Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return(
            <div className='counter'>
                <button onClick={this.increment}>Zwiększ o 1</button>
                <button onClick={this.decrement}>Zmniejsz o 1</button>
                <span>Licznik: {this.state.counter}</span>
            </div>
        )
    },
    componentWillMount: function () {
        console.log('pozwala ustawić dane wejściowe przed renderowaniem ')
    },
    componentWillUnmount: function () {
        console.log('usunięie komponetu z drzewa DOM')
    },
    componentDidMount: function () {
        console.log('uruchamiane po wyrenderowaniu elementu, może być wykorzystane do pobrania dodatkowych danych (?)')
    },
    componentWillReceiveProps: function () {
        console.log('Aktualizacja danych wejściowych')
    },
    shouldComponentUpdate: function () {
        console.log('');
        return true;
    },
    componentWillUpdate: function () {
        console.log('przekazuje nowe właściwości przed ponownym renderowaniem')
    },

});
const element =
    <div>
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
    </div>

ReactDOM.render(element, document.getElementById('app'));