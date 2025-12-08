import Flex from "@/components/Flex/Flex";
import Text from "@/components/Text/Text";
import ImageUploadSection from "./_components/ImageUploadSection/ImageUploadSection";
import NoticeSection from "./_components/NoticeSection/NoticeSection";

export default function UploadPage() {
    return (
      <Flex width="100%"  justify="center" align="center" paddingBottom="5rem" paddingTop="10rem">
         <Flex gap="7.5rem">
          <Flex direction="column" gap="2.4rem" align="flexStart">
<Text size={2.4} fontWeight="bold">
              이미지 업로드
            </Text>
            <ImageUploadSection/>
          </Flex>
          <Flex direction="column" gap="2.4rem" align="flexStart">
<Text size={2.4} fontWeight="bold">
              안내 및 주의사항
            </Text>
            <NoticeSection/>
          </Flex>

         </Flex>
        
      </Flex>
    );
  }