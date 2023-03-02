import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Calculator from "../components/Calculator"

describe("Calculator", () =>{
    test('Garantir que a aplicação é renderizada corretamente com os dígitos de operações +, -, *, e /', () => { 
        render(<Calculator/>)

        const buttonAdd = screen.getByText(/\+/i)
        const buttonDecrease = screen.getByText(/\-/i)
        const buttonMultiply = screen.getByText(/\*/i)
        const buttonDivide = screen.getByText(/\//i)

        expect(buttonAdd).toBeInTheDocument()
        expect(buttonDecrease).toBeInTheDocument()
        expect(buttonMultiply).toBeInTheDocument()
        expect(buttonDivide).toBeInTheDocument()
    })

    test('Garantir que a multiplicação está funcionando corretamente.', async () => { 
        const user = userEvent.setup()

        render(<Calculator/>)

        const numberFive = screen.getByText("5")
        await user.click(numberFive)

        const buttonMultiply = screen.getByText("*")
        await user.click(buttonMultiply)

        const numberTwo = screen.getByText("2")
        await user.click(numberTwo)

        const buttonEqual = screen.getByText("=")
        await user.click(buttonEqual)

        const value = screen.getByTestId("result")

        expect(value).toBeInTheDocument()

        //screen.debug()

    })

    test('Garantir que a multiplicação está funcionando corretamente.', async () => { 
        const user = userEvent.setup()

        render(<Calculator/>)

        const numberNine = screen.getByText("9")
        await user.click(numberNine)

        const buttonMultiply = screen.getByText("*")
        await user.click(buttonMultiply)

        const numberEigth = screen.getByText("8")
        await user.click(numberEigth)

        const buttonEqual = screen.getByText("=")
        await user.click(buttonEqual)

        const value = screen.getByTestId("result")

        expect(value).toBeInTheDocument()

        //screen.debug()

    })

    test('Garantir que concatenar operações está funcionando corretamente.', async () => { 
        const user = userEvent.setup()

        render(<Calculator/>)

        const numberFour = screen.getByText("4")
        await user.click(numberFour)

        const buttonMultiply = screen.getByText("*")
        await user.click(buttonMultiply)

        const numberSeven = screen.getByText("7")
        await user.click(numberSeven)

        const buttonAdd = screen.getByText("+")
        await user.click(buttonAdd)

        const numberTwo = screen.getByText("2")
        await user.click(numberTwo)

        const buttonEqual = screen.getByText("=")
        await user.click(buttonEqual)

        const value = screen.getByTestId("result")

        expect(value).toBeInTheDocument()

        //screen.debug()

    })

    test('Garantir que os dígitos númericos renderizam corretamente', () => { 
        render(<Calculator/>)

        //screen.logTestingPlaygroundURL()

        const buttonZero = screen.getByRole('button', {name: /0/i})
        const buttonOne = screen.getByRole('button', {name: /1/i})
        const buttonTwo = screen.getByRole('button', {name: /2/i})
        const buttonThree = screen.getByRole('button', {name: /3/i})
        const buttonFour = screen.getByRole('button', {name: /4/i})
        const buttonFive = screen.getByRole('button', {name: /5/i})
        const buttonSix = screen.getByRole('button', {name: /6/i})
        const buttonSeven = screen.getByRole('button', {name: /7/i})
        const buttonEigth = screen.getByRole('button', {name: /8/i})
        const buttonNine = screen.getByRole('button', {name: /9/i})

        expect(buttonZero).toBeInTheDocument()
        expect(buttonOne).toBeInTheDocument()
        expect(buttonTwo).toBeInTheDocument()
        expect(buttonThree).toBeInTheDocument()
        expect(buttonFour).toBeInTheDocument()
        expect(buttonFive).toBeInTheDocument()
        expect(buttonSix).toBeInTheDocument()
        expect(buttonSeven).toBeInTheDocument()
        expect(buttonEigth).toBeInTheDocument()
        expect(buttonNine).toBeInTheDocument()
    })

    test('Garantir que a subtração esteja funcionando corretamente.', async () => { 
        const user = userEvent.setup()

        render(<Calculator/>)

        const numberSix = screen.getByText("6")
        await user.click(numberSix)

        const buttonDecrease = screen.getByText("-")
        await user.click(buttonDecrease)

        const numberThree = screen.getByText("3")
        await user.click(numberThree)

        const buttonEqual = screen.getByText("=")
        await user.click(buttonEqual)

        const value = screen.getByTestId("result")

        expect(value).toBeInTheDocument()

        //screen.debug()

    })

    test('Garantir que a divisão esteja funcionando corretamente.', async () => { 
        const user = userEvent.setup()

        render(<Calculator/>)

        const numberSix = screen.getByText("6")
        await user.click(numberSix)

        const numberFour = screen.getByText("4")
        await user.click(numberFour)

        const buttonDivide = screen.getByText("/")
        await user.click(buttonDivide)

        const numberTwo = screen.getByText("2")
        await user.click(numberTwo)

        const buttonEqual = screen.getByText("=")
        await user.click(buttonEqual)

        const value = screen.getByTestId("result")

        expect(value).toBeInTheDocument()

        //screen.debug()

    })

    test('Garantir que dividir por 0 gera NaN.', async () => { 
        const user = userEvent.setup()

        render(<Calculator/>)

        const numberSix = screen.getByText("6")
        await user.click(numberSix)

        const buttonDivide = screen.getByText("/")
        await user.click(buttonDivide)

        const numberZero = screen.getByText("0")
        await user.click(numberZero)

        const buttonEqual = screen.getByText("=")
        await user.click(buttonEqual)

        const value = screen.getByTestId("result")

        expect(value).toBeInTheDocument()

        screen.debug()

    })
})