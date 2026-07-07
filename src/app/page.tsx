"use client"

import {Text } from '@/components/ui/text'
import {ButtonGroup, ButtonGroupText} from '@/components/ui/button-group'

export default function Home() {
  return (
    <div>
      <ButtonGroup orientation="vertical"> 
        <ButtonGroupText onClick={() => console.log('Button Group Text clicked')}>
          Button Group
        </ButtonGroupText>
        <ButtonGroupText>
          Button Group
        </ButtonGroupText>
      </ButtonGroup>
      <br />
      <Text size="lg">s</Text>
      Main Page
    </div>
  );
}
