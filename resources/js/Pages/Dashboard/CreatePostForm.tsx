import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from 'laravel-precognition-react-inertia';

export function CreatePostForm() {
    const form = useForm<App.Data.StorePostData>('post', route('posts.store'), {
        content: '',
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                if (form.hasErrors) {
                    return;
                }

                form.submit({ preserveScroll: true, onSuccess: form.reset });
            }}
            className="space-y-4"
        >
            <div>
                <InputLabel htmlFor="name" value="Name" />

                <TextInput
                    id="content"
                    value={form.data.content}
                    onChange={(e) => form.setData('content', e.target.value)}
                    onBlur={() => form.validate('content')}
                    required
                    isFocused
                    autoComplete="content"
                    className="w-full"
                />

                <InputError className="mt-2" message={form.errors.content} />
            </div>

            <PrimaryButton type="submit">Create post</PrimaryButton>
        </form>
    );
}
