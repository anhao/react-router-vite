import { increment, decrement, incrementByAmount } from "@/store/counterSlice"
import { useAppDispatch } from "@/store/hooks"
import { useAppSelector } from "@/store/hooks"
export default function Index() {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    return (
        <div>
            <p>Count: {count}</p>
            <div className="flex gap-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => dispatch(increment())}>Increment</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => dispatch(decrement())}>Decrement</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
            </div>
        </div>
    )
}