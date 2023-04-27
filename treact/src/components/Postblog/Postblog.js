import React from 'react';
import tw from 'twin.macro';

const Container = tw.div`
  bg-white
  p-4
  rounded-lg
  shadow-md
  max-w-3xl
  mx-auto
`;

const Title = tw.h1`
  text-3xl
  font-bold
  mb-4
`;

const Content = tw.div`
  text-gray-800
  leading-relaxed
`;
const Author = tw.p`
  text-gray-500
  text-sm
  mb-1
  flex
  justify-end
`;
const Date = tw.span`
  text-gray-500
  text-sm
`;
const BlogPost = ({ 
    title = 'Why learn programming?',
     content = 
     `Bạn có bao giờ tự hỏi tại sao học lập trình lại quan trọng đến vậy không?

     Trong thế giới số đang ngày càng phát triển hiện nay, lập trình trở thành một kỹ năng cần thiết cho nhiều ngành nghề. Từ phát triển phần mềm, thiết kế trang web, cho đến trí tuệ nhân tạo và khoa học dữ liệu, lập trình đang trở thành một phần không thể thiếu của nhiều ngành công nghiệp.
 
     Ngoài ra, học lập trình còn giúp bạn phát triển tư duy logic và khả năng giải quyết vấn đề. Khi lập trình, bạn sẽ phải tư duy về việc giải quyết các vấn đề và thiết kế các giải pháp. Điều này giúp bạn phát triển kỹ năng tư duy logic và khả năng giải quyết vấn đề, một kỹ năng rất quan trọng trong nhiều ngành nghề.
 
     Cuối cùng, học lập trình còn giúp bạn có thể tạo ra sản phẩm và dịch vụ mới. Với những kỹ năng lập trình, bạn có thể tạo ra các ứng dụng, trang web, game và nhiều sản phẩm kỹ thuật khác. Điều này không chỉ giúp bạn thực hiện ý tưởng của mình, mà còn giúp bạn có thể kiếm tiền từ việc phát triển các sản phẩm này.
 
     Vì vậy, học lập trình là một kỹ năng rất quan trọng và cần thiết cho tương lai của bạn. Nếu bạn chưa bắt đầu học lập trình, hãy bắt đầu từ hôm nay để có thể tận dụng được những cơ hội nghề nghiệp tuyệt vời trong tương lai.`,
     author = 'Nguyễn Minh Lý',
     date = "10/10/2024"
     }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Author>
        <span style={{fontWeight: "bold"}}>{author}</span> - 
        <Date>{date}</Date>
        </Author>
    </Container>
  );
};

export default BlogPost;