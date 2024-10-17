import { BlogList } from '../../components/blog/BlogList';
import { FormattedMessage } from '../../components/utils/FormattedMessage';

const BlogPage = () => {
	return (
		<div className={'container'}>
			<h1 className={'text-4xl sm:text-5xl lg:text-6xl text-center mb-[20px] font-medium text-white py-[2rem]'}>
				<FormattedMessage id={'blog.title'} />
			</h1>
			<BlogList />
		</div>
	);
};

export default BlogPage;
