import { Button } from '@/components/ui/commonbutton';
const LoginPage = () => {
  return (
    <div>
      <h1>LoginPage</h1>
      <div>
        <div>default</div>
        <Button>Button</Button>
        <Button disabled>Button</Button>
      </div>
      <div>
        <div>mid + icon</div>
        <Button size="mid" icon>
          Button
        </Button>
        <Button size="mid" icon disabled>
          Button
        </Button>
      </div>
      <div>
        <div>icon</div>
        <Button size="icon" />
        <Button size="icon" disabled />
      </div>
      <div>
        <div>Secondary - Grey</div>
        <Button variant="secondary">Button</Button>
        <Button variant="secondary" disabled>
          Button
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
