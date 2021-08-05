import { ReviewFormProps } from './ReviewForm.Props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import {Input} from "../Input/Input";
import {Rating} from "../Rating/Rating";
import {Textarea} from "../Textarea/Textarea";
import {Button} from "../Button/Button";
import CloseIcon from './close.svg';
import {IReviewForm, IREviewSentResponse} from "./ReviewForm.interface";
import { useForm, Controller } from "react-hook-form";
import {API} from "../../helpers/api";
import axios from "axios";
import {useState} from "react";

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setIsError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const { data } = await axios.post<IREviewSentResponse>(API.review.createDemo, {
                ...formData,
                productId
            });
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setIsError('Что-то пошло не так');
            }

        } catch (e) {
            setIsError(e.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)}
                 {...props}
            >
                <Input
                    {...register('name', { required: { value: true, message: 'Заполните имя' }})}
                    placeholder='Имя'
                    error={errors.name}
                />
                <Input
                    {...register('title', { required: { value: true, message: 'Заполните заголовок' }})}
                    className={styles.title}
                    placeholder='Заголовок отзыва'
                    error={errors.title}
                />
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller
                        control={control}
                        name='rating'
                        rules={{ required: { value: true, message: 'Укажите рейтинг' }}}
                        render={({ field }) => (
                            <Rating
                                isEditable
                                rating={field.value}
                                setRating={field.onChange}
                                ref={field.ref}
                                error={errors.rating}
                            />
                        )}
                    />
                </div>
                <Textarea
                    {...register('description', { required: { value: true, message: 'Заполните описание' }})}
                    className={styles.description}
                    placeholder='Текст отзыва'
                    error={errors.description}
                />
                <div className={styles.submit}>
                    <Button appearance='primary'>Отправить</Button>
                    <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            {isSuccess && <div className={cn(styles.panel, styles.success)}>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div>
                    Спасибо, ваш отзыв будет опубликован после проверки
                </div>
                <CloseIcon
                    className={styles.close}
                    onClick={() => setIsSuccess(false)}
                />
            </div>}
            {error && <div className={cn(styles.panel, styles.error)}>
                Что-то пошло не так, попробуйте обновить страницу
                <CloseIcon
                    className={styles.close}
                    onClick={() => setIsError(undefined)}
                />
            </div>}
        </form>
    );
};
