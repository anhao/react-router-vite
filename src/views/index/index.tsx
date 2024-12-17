import useI18n from "@/hooks/useI18n"
import { increment, decrement, incrementByAmount } from "@/store/counterSlice"
import { useAppDispatch } from "@/store/hooks"
import { useAppSelector } from "@/store/hooks"
import { t } from "i18next"
export default function Index() {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    const i18n = useI18n()
    return (
        <div>
            <p>{t('welcome')}</p>
            <p>Count: {count}</p>
            <div className="flex gap-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => dispatch(increment())}>Increment</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => dispatch(decrement())}>Decrement</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => i18n.changeLanguage('en_US')}>English</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => i18n.changeLanguage('zh_CN')}>中文</button>
            </div>
        </div>
    )
}